import React from 'react';
import { Zap, Video, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SHELLY_FEATURES = [
  'Światło, rolety, ogrzewanie i sceny w jednej aplikacji',
  'Harmonogramy według wschodu i zachodu słońca',
  'Podgląd zużycia prądu w watach i złotówkach',
  'Powiadomienia, gdy okno jest otwarte albo czujnik wykryje wodę',
  'Działa w domowym Wi-Fi, także przy awarii internetu',
];

const HIK_FEATURES = [
  'Podgląd z kamer i wideodomofonu na żywo',
  'Rozmowa wideo z gościem przy furtce',
  'Otwieranie furtki i bramy z poziomu telefonu',
  'Kolorowy obraz w nocy i mniej fałszywych alarmów',
  'Nagrania na dysku w domu, bez abonamentu',
];

export const AppsShowcaseSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B87333] mb-3 font-semibold">
            Aplikacje • Telefon
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Światło, rolety i ogrzewanie z telefonu.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Dwie aplikacje do dwóch zadań. Zwykłe przyciski działają jak zawsze, a telefon to dodatek. Poniżej, do czego służy każda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="p-7 rounded-[2px] bg-[#F9FAFB] border border-slate-200 flex flex-col">
            <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-[#B87333]" />
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#B87333]">
              Automatyka domu
            </div>
            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Shelly Smart Control
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Centrum sterowania domem. Światło, rolety, ogrzewanie, sceny
              i zużycie energii. Wszystko w jednym miejscu.
            </p>
            <ul className="mt-5 space-y-2.5 flex-1">
              {SHELLY_FEATURES.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <Link
                to="/kalkulator"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B87333] hover:text-[#A36034] transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 rounded-[2px]"
              >
                <span>Wypełnij ankietę (2 min)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          <article className="p-7 rounded-[2px] bg-[#F9FAFB] border border-slate-200 flex flex-col">
            <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/10 flex items-center justify-center mb-4">
              <Video className="w-5 h-5 text-[#B87333]" />
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#B87333]">
              Kamery i domofon
            </div>
            <h3 className="mt-1 text-xl font-bold text-slate-900">Hik-Connect</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Podgląd posesji i rozmowy z furtki. Odbierasz gościa z pracy
              albo z wakacji. Otwierasz furtkę jednym dotknięciem.
            </p>
            <ul className="mt-5 space-y-2.5 flex-1">
              {HIK_FEATURES.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <Link
                to="/teletechnika"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B87333] hover:text-[#A36034] transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 rounded-[2px]"
              >
                <span>Zobacz monitoring i wideodomofony</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
