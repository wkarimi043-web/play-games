import React from 'react';

export interface FAQItem {
    question: string;
    answer: string;
}

export interface SEOData {
    longDescription: string;
    features: string[];
    faq: FAQItem[];
    keywords: string[];
}

export interface Game {
    id: string;
    title: string;
    description: string;
    instructions: string;
    category: string;
    icon: string;
    component: React.FC<any>;
    seoData?: SEOData; // Optional SEO content
}

export interface GameState {
    score: number;
    isGameOver: boolean;
    isStarted: boolean;
}