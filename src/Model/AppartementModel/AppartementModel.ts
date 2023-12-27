import { BookMark } from "../FavoriteBookMark/FavoriteBookMark";

export interface IAppartement {
  id: number;
  title: string;
  description: string;
  price: number;
  // location: {
  //   latitude: number;
  //   longitude: number;
  // };
  favorites?: BookMark
}
