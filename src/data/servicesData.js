import { 
  Cloud, 
  Search, 
  TrendingUp, 
  Code2, 
  ShoppingCart, 
  Sparkles 
} from "lucide-react";

export const services = [
  {
    id: "saas",
    title: "SaaS Development",
    icon: Cloud,
    tag: "Cloud Native",
    description: "Scalable multi-tenant cloud architectures, resilient background workers, and production-grade API integrations."
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    icon: Search,
    tag: "Organic Growth",
    description: "Deep technical audits, schema markup implementation, Core Web Vitals optimization, and keyword authority strategy."
  },
  {
    id: "sem",
    title: "Search Engine Marketing",
    icon: TrendingUp,
    tag: "Paid Performance",
    description: "High-conversion PPC campaign management, conversion tracking pipelines, and targeted multi-channel ad architecture."
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Code2,
    tag: "Full Stack",
    description: "Fast, custom websites and web apps built with modern frontend frameworks, strict security, and responsive layouts."
  },
  {
    id: "ecomm",
    title: "Basic & Custom E-Commerce",
    icon: ShoppingCart,
    tag: "Digital Commerce",
    description: "Seamless checkout funnels, payment gateway integrations, catalog management, and automated order fulfillment flows."
  },
  {
    id: "interactive",
    title: "Interactive Web Experiences",
    icon: Sparkles,
    tag: "UI / Canvas",
    description: "Immersive micro-interactions, smooth scroll transitions, dynamic visuals, and interactive 3D/canvas elements."
  }
];