export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface HeroPost {
  id: string;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  author: Author;
  readMoreUrl: string;
  graphicType: 'gemini' | 'ai-tools' | 'cloud' | 'analytics' | 'workflow' | 'security' | 'database' | 'performance' | 'growth' | 'automation';
  accentColor: string;
  bgGradient: string;
  badgeText?: string;
}
