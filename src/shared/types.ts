// Shared types for Bykorp Digital Agency Backend
export interface ServiceType {
  id: number;
  name: string;
  description: string;
  price_starting: string;
  features: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface PortfolioItemType {
  id: number;
  title: string;
  description: string;
  category: string;
  image_url: string;
  client_name: string;
  completion_date: string;
  technologies: string;
  is_featured: number;
  created_at: string;
  updated_at: string;
}

export interface ReviewType {
  id: number;
  client_name: string;
  company: string;
  rating: number;
  review_text: string;
  is_featured: number;
  created_at: string;
  updated_at: string;
}

export interface CreateReservationType {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_type: string;
  message?: string;
  preferred_date?: string;
}