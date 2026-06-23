export type ActiveTab = 'home' | 'about' | 'services' | 'solutions' | 'contact';

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  bgImage: string;
  topic: string;
}

export interface Capability {
  id: number;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  badge: string;
}

export interface BrandPartner {
  name: string;
  logoText: string;
  description: string;
  logo?: string;
}

export interface SubCategoryItem {
  name: string;
  description?: string;
  marketPosition?: string;
  keyProducts?: string[];
  keyFeatures?: string[];
  keyApplications?: string[];
  trackRecord?: string;
  keyCharacteristics?: string[];
  technicalHighlights?: string[];
  technicalRange?: string;
  solutions?: string[];
  projectFootprint?: string[];
  capabilities?: string[];
  activeDeployment?: string[];
  technology?: string;
  services?: { name: string; marketPosition?: string; description: string }[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  items: SubCategoryItem[];
}
