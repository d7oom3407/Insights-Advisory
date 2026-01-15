
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  description: string;
  details: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
