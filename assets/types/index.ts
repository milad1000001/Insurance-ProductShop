export interface ProductDetails {
    available: Boolean;
    azkivam: Boolean;
    categoryId: number;
    categoryName: string;
    hidden: Boolean;
    id: number;
    imageUrl: string;
    maxPrice: number;
    merchantId: number;
    merchantName: string;
    minPrice: number;
    name: string;
    slug: string;
}

export interface CategoriesDetails {
    id: number;
    name: string;
    slug: string;
    enabled: Boolean;
    priority: number;
    mapped: Boolean;
    parent: number;
    children?: CategoriesDetails[];
}

export interface MerchantsDetails {
    id: number;
    name: string;
    enabled: boolean;
    description: string;
}
