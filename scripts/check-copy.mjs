// Fails the build when site copy breaks the promises in CLAUDE.md
// (things the company does not offer, does not claim yet, or words we avoid).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const RULES = [
  [/gwarancj/i, 'no warranty period on the site for now'],
  [/ładowar|ładuje samoch|ładowanie aut|wallbox/i, 'EV chargers are not offered'],
  [/\bankiet|kalkulator/i, 'the enquiry is not a survey or a calculator'],
  [/dobierz\w* zestaw|dob[oó]r\w* zestaw|dobierzemy zestaw/i, 'no kits: the enquiry button is "Opisz swój dom"'],
  [/sprawdzon\w* (zestaw|rzecz|rozwiąza)|realizacj|gotowych dom|bestseller|najczęściej wybier/i, 'new company: no track-record claims'],
  [/HEPA|PN-HD|uprawnie\w* SEP/i, 'unverified standards or certificates'],
  [/przepięci/i, 'surge protection is not a service'],
  [/SSWiN|central\w* alarmow|system\w* alarmow|czujk\w* ruchu PIR/i, 'alarm systems are not offered'],
  [/podlew|nawadnia/i, 'garden watering is not offered'],
  [/głośnik|muzyk|\bmultiroom\b|nagłośn/i, 'audio is not offered'],
  [/klimatyz/i, 'air conditioning is not offered'],
  [/szybki\w* internet|internet\w* w (całym|każdym)|wi-?fi (na każdym|w całym|dla gości)/i, 'we do not provide internet or household Wi-Fi'],
  [/asystent\w* głosow|komend\w* głosow|polecen\w* głosow|\bgłosem\b/i, 'no voice assistants or commands'],
  [/uzbraj|fałszyw\w* alarm/i, 'cameras send notifications; no alarm wording'],
  [/LOQED/, 'third-party locks are not offered'],
  [/rysunk/i, 'checking drawings is not a target offer'],
  [/cał\w* Polsk/i, 'region is Warszawa i okolice'],
];
// Code-only lines that are allowed to match (ids, routes, comments)
const ALLOW = [/^\s*(id|key):/, /path="\/kalkulator"/, /^\s*\/\//, /^\s*\{?\/\*/, /^\s*\*/];

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|html)$/.test(name)) files.push(p);
  }
};
walk('src');
files.push('index.html');

const hits = [];
for (const file of files) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (ALLOW.some((a) => a.test(line))) return;
    for (const [re, why] of RULES) {
      if (re.test(line)) hits.push(`${file}:${i + 1}  ${why}\n    ${line.trim().slice(0, 140)}`);
    }
  });
}
if (hits.length) {
  console.error(`check-copy: ${hits.length} problem(s)\n` + hits.join('\n'));
  process.exit(1);
}
console.log('check-copy: OK');
