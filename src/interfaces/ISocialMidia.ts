export interface ISocialMedia {
  facebook?: {
    name: string;
    tag?: string;
    url?: string;
  };
  instagram?: {
    name: string;
    tag?: string;
    url?: string;
  };
  linkedin?: {
    name: string;
    tag?: string;
    url?: string;
  };
  whatsapp?: {
    name: string;
    phone?: string;
    url?: string;
  };
  site?: {
    name: string;
    url?: string;
  }
}
