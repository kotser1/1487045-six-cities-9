import { User } from './user';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number | null;
  user: User;
};

export type NewReview = Omit<Review, 'user' | 'date'>;
