export interface StyleOption {
  id: string;
  name: string;
  description: string;
  image: string;
  popular?: boolean;
  maintenance?: string;
  sharpness?: number;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  time: string;
  popular?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  purpose: string;
  effect: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
