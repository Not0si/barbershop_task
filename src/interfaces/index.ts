export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'client';
  shopName?: string;
  preferredService?: string;
}

export interface LoginSuccess {
  success: true;
  user: User
}

export interface LoginFailure {
  success: false;
  message: string;
}