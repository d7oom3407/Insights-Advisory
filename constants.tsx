
import React from 'react';
import { 
  LineChart, 
  PieChart, 
  Briefcase, 
  Home, 
  Search, 
  TrendingUp, 
  Facebook, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import { Service, Partner, LocationInfo } from './types';

export const COLORS = {
  primary: '#1e2258', // Deep Navy
  secondary: '#3d5a5a', // Dark Teal
  accent: '#2d5a57', // Forest/Green mix
  light: '#f1f5f9',
};

export const LOGO_URL = "https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/blob-10c9aa7.png/:/rs=w:245,h:128,cg:true,m/cr=w:245,h:128/qt=q:95";

export const SERVICES: Service[] = [
  {
    id: 'fin-analysis',
    title: 'Financial Analysis',
    description: 'Helping businesses optimize financial performance, manage risks, and improve profitability.',
    icon: 'LineChart'
  },
  {
    id: 'invest-feasibility',
    title: 'Investment Feasibility Studies',
    description: 'Assessing the viability of investment opportunities for sustainable growth.',
    icon: 'PieChart'
  },
  {
    id: 'portfolio-mgmt',
    title: 'Investment Portfolio Management',
    description: 'Optimizing diversified portfolios through strategic allocation to enhance returns and reduce risks.',
    icon: 'Briefcase'
  },
  {
    id: 're-advisory',
    title: 'Real Estate Advisory',
    description: 'Specialized in delivering financial studies and evaluating real estate opportunities to support strategic investment decisions.',
    icon: 'Home'
  },
  {
    id: 'market-research',
    title: 'Market Research & Analysis',
    description: 'Providing in-depth market insights to guide informed decision-making.',
    icon: 'Search'
  },
  {
    id: 'business-valuation',
    title: 'Business Valuation',
    description: 'Accurate and comprehensive business valuation services for mergers, acquisitions, and strategic planning.',
    icon: 'TrendingUp'
  }
];

export const PARTNERS: Partner[] = [
  { id: 'p1', name: 'Al Rajhi Bank', logoUrl: 'https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/Al_Rajhi_Bank_Logo.svg.png/:/rs=w:280,h:100,cg:true,m/cr=w:280,h:100' },
  { id: 'p2', name: 'Partner 2', logoUrl: 'https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/202504251835099667486.jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100' },
  { id: 'p3', name: 'QNB', logoUrl: 'https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/images.png/:/rs=w:337,h:100,cg:true,m/cr=w:337,h:100' },
  { id: 'p4', name: 'Partner 4', logoUrl: 'https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/07112024084437668f9b75ed6a3.png/:/rs=w:318,h:100,cg:true,m/cr=w:318,h:100' },
  { id: 'p5', name: 'CarPlex', logoUrl: 'https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/Screenshot%202025-08-22%20150406.png/:/rs=w:96,h:100,cg:true,m/cr=w:96,h:100' },
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'ksa',
    name: 'KSA',
    description: 'Our headquarters and largest market.',
    details: 'Where we have delivered more than 200 real estate and financial studies that supported investors’ decision-making, in addition to preparing feasibility and financing studies for entrepreneurs in collaboration with government institutions.'
  },
  {
    id: 'uae',
    name: 'UAE',
    description: 'A regional expansion hub.',
    details: 'Through which we provide specialized feasibility studies and financial advisory services that reflect the dynamism of the UAE market, support the decision-making of local and international investors, and offer portfolio performance evaluation services for investors.'
  },
  {
    id: 'egypt',
    name: 'EGYPT',
    description: 'Empowering small and medium enterprises (SMEs).',
    details: 'In Egypt, we focus on empowering SMEs and entrepreneurs by providing specialized feasibility and financing studies, in addition to supporting real estate development projects and investors with comprehensive advisory solutions that enhance success opportunities and align with economic and urban development plans.'
  }
];

export const SOCIALS = [
  { name: 'Facebook', url: 'https://www.facebook.com/people/Insights-Advisory/100063922906691/#', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', url: 'https://www.instagram.com/insights_adv/', icon: <Instagram className="w-5 h-5" /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/insights-advisor/', icon: <Linkedin className="w-5 h-5" /> },
];
