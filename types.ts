
export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  realPrice: number;
  discountPrice: number;
  features: string[];
  category: 'Interior' | 'Exterior' | 'Complete';
  tag?: string;
}

export interface BookingDetails {
  packageId: string;
  carModel: string;
  name: string;
  phone: string;
  address: string;
}
