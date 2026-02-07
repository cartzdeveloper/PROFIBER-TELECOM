import React from 'react';

export interface Plan {
  id: number;
  speed: string;
  price: string;
  period: string;
  features: string[];
  isRecommended: boolean;
  highlightColor?: string;
}

export interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}