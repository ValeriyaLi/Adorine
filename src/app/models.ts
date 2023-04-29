export interface Category {
  id: number;
  title: string;
  logo: string;
}

export interface AuthToken {
  token: string;
  user_id: number;
}

export interface User{
  id: number;
  username: string;
  password: string,
  email: string;
}

export interface Product {
  id: number;
  title: string;
  category_name: string;
  description: string;
  price: number;
  logo: string;
}

export interface UserCart{
  id: number;
}
