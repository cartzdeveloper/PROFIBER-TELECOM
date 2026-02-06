export interface Plan {
  id: number;
  speed: string;
  price: string;
  period: string;
  features: string[];
  isRecommended: boolean;
  highlightColor?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}