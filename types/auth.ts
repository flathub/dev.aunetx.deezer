// Authentication type definitions

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export type UserRole = "teacher" | "admin";
