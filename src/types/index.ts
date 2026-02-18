export interface User {
  id: string;
  username: string;
  email: string;
  balance: number;
  isLoggedIn: boolean;
}

export interface Game {
  id: string;
  name: string;
  image: string;
  category?: 'slots' | 'fishing' | 'live' | 'sports';
  isHot?: boolean;
}

export interface Winner {
  id: string;
  username: string;
  game: string;
  amount: number;
  date: string;
}

export interface PopupMessage {
  title: string;
  message: string;
  buttonText: string;
}
