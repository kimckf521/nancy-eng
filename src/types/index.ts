import { Timestamp } from "firebase/firestore";

export type UserRole = "admin" | "employee" | "customer";

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
  createdAt: Timestamp;
}

export interface Product {
  id?: string;
  name: string;
  description: string;
  category: string;
  price: number;
  specifications: Record<string, string>;
  imageUrls: string[];
  stockQuantity: number;
  uploadedBy: string; // User UID
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isFeatured: boolean;
}

export interface Enquiry {
  id?: string;
  productId?: string; // Optional if general inquiry
  productName?: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  message: string;
  status: "new" | "pending" | "resolved";
  createdAt: Timestamp;
}
