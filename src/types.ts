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

export interface FaqItem {
  question: string;
  simpleAnswer: string;
  technicalDetails: string;
  category: 'dzialanie' | 'koszty' | 'bezpieczenstwo' | 'remont';
}
