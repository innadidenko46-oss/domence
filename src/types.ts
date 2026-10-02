export type PropertyState = 'deweloperski' | 'retro' | 'security' | 'commercial';

export type AreaRange = 'do_60' | '61_110' | '111_180' | 'ponad_180';

export interface SmartModule {
  id: string;
  name: string;
  badge?: string;
  description: string;
  humanExplanation: string;
  price: number;
  category: 'safety' | 'comfort' | 'energy' | 'access' | 'teletechnics' | 'power';
  icon: string;
}

export interface PackageOffer {
  id: string;
  title: string;
  categoryBadge: string;
  badgeType: 'bestseller' | 'standard' | 'premium' | 'enterprise';
  timeframe: string;
  description: string;
  humanSummary: string;
  priceNetto: number;
  priceBrutto: number;
  features: string[];
  recommendedFor: PropertyState;
}

export interface LifeScenario {
  id: string;
  number: string;
  title: string;
  tag: string;
  tagColor: string;
  trigger?: string;
  description: string;
  humanNote: string;
  detailPoints: string[];
  actionSteps?: {
    icon: string;
    label: string;
    detail: string;
  }[];
  imageUrl: string;
  icon: string;
}

export interface ShellyProCapability {
  id: string;
  title: string;
  category: 'lighting' | 'blinds' | 'climate' | 'audio' | 'sensors' | 'interface';
  badge: string;
  description: string;
  proAdvantage: string;
  shellyAdvantage: string;
  scenariosExample: string;
  features: string[];
}

export interface AiFeature {
  id: string;
  title: string;
  brand: 'Hikvision' | 'Shelly' | 'Hybrid';
  badge: string;
  tagline: string;
  description: string;
  examplePrompt?: string;
  capabilities: string[];
  specs: string[];
  icon: string;
  image: string;
}

export interface HikvisionProductLine {
  id: string;
  series: string;
  category: 'cctv_colorvu' | 'cctv_acusense' | 'cctv_tandemvu' | 'intercom_modular' | 'intercom_face' | 'intercom_android';
  tagline: string;
  highlights: string[];
  keyTech: string;
  bestUse: string;
  image?: string;
}

export interface SystemComparison {
  id: string;
  name: string;
  tagline: string;
  cableType: 'Magistrala przewodowa (Bus)' | 'Hybrydowy (LAN + Bezprzewodowy)' | 'Czysto bezprzewodowy (Zigbee/Wi-Fi)' | 'Serwer przemysłowy (PLC)';
  bestFor: string;
  autonomyOffline: '100% Pełna lokalnie' | '100% Lokalna z opcją chmury' | 'Zależna od chmury producenta';
  pros: string[];
  cons: string[];
  humanVerdict: string;
  estimatedCostScale: 'Średni' | 'Wysoki' | 'Premium / Rezydencjalny';
}

export interface TeletechnicService {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  humanExplanation: string;
  equipment: string[];
  specs: string[];
}

export interface EnergyFeature {
  id: string;
  title: string;
  benefit: string;
  howItWorks: string;
  humanVerdict: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  simpleAnswer: string;
  technicalDetails: string;
  category: 'dzialanie' | 'koszty' | 'bezpieczenstwo' | 'remont';
}
