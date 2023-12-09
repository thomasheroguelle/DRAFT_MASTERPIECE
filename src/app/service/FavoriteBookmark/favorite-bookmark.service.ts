import { Injectable } from '@angular/core';
import { BookMark, Key } from '../../../Model/FavoriteBookMark/FavoriteBookMark';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteBookmarkService {

  private static readonly FAVORITES_KEY = 'bookmark'


  constructor() { }

  getFavorites(): BookMark[] {
    const favoritesList = localStorage.getItem(FavoriteBookmarkService.FAVORITES_KEY);
    if (favoritesList) {
      return JSON.parse(favoritesList);
    } else {
      return [];
    }
  }

  newFavorite(favorite: BookMark) {
    const favoriteList: BookMark[] = this.getFavorites();
    favorite.id = (favoriteList.length > 0) ? favoriteList[favoriteList.length - 1].id + 1 : 0;
    favoriteList.push(favorite);
    this.saveFavoriteToLocalStorage(favoriteList);
  }

  saveFavoriteToLocalStorage(favorite: BookMark[]) {
    const favoriteInStringify = JSON.stringify(favorite)
      ;
    localStorage.setItem(FavoriteBookmarkService.FAVORITES_KEY, favoriteInStringify)
  }

  // addFavorite(favorite: BookMark) {
  //   return this.getFavorites().pipe( 
  //     map(fav => {
  //       fav.push(favorite); 
  //       return fav; 
  //     }),
  //     switchMap(fav => this.setFavorites(fav)) 
  //   );
  // }

  // getFavorites(): Observable<BookMark[]> {
  //   const key = Key.FAVORITES;
  //   return from(Storage.get({ key })).pipe(
  //     map(fav => fav ? JSON.parse(fav.value) : [])
  //   );
  // }

  // getFavorite(id: number): Observable<BookMark> {
  //   return this.getFavorites().pipe( 
  //     map(fav => {
  //       const index = fav.findIndex(f => f.id === id); 
  //       return fav[index] 
  //     })
  //   );
  // }

  // deleteFavorite(id: number) {
  //   return this.getFavorites().pipe(
  //     map(fav => {
  //       const index = fav.findIndex(f => f.id === id);
  //       return fav.splice(index, 1); 
  //     }),
  //     switchMap(fav => this.setFavorites(fav)) 
  //   );
  // }

  // like deleteFavorite()
  // updateFavorite(favorite: BookMark) {
  //   return this.getFavorites().pipe(
  //     map(fav => {
  //       const index = fav.findIndex(f => f.id === favorite.id);
  //       fav[index] = favorite;
  //       return fav;
  //     }),
  //     switchMap(fav => this.setFavorites(fav))
  //   );
  // }

  // helper for parsing to storage
  // private setFavorites(favorites: Array<BookMark>) {
  //   const key = Key.FAVORITES;
  //   const value = JSON.stringify(favorites);

  //   try {
  //      localStorage.setItem(key, value)
  //   } catch(error) {
  //     console.error("Erreur setFavorites", error)
  //   }
  // }


}
