import { Component } from '@angular/core';
import { FavoriteBookmarkService } from '../../service/FavoriteBookmark/favorite-bookmark.service';
import { BookMark } from '../../../Model/FavoriteBookMark/FavoriteBookMark';

@Component({
  selector: 'app-favoritebookmark',
  templateUrl: './favoritebookmark.component.html',
  styleUrl: './favoritebookmark.component.css'
})
export class FavoritebookmarkComponent {

  favorite: BookMark = {
    id: 1,
    title: '',
    url: ""
  }

  constructor(private favoriteBookMark: FavoriteBookmarkService) { }
  getFavorites() {
    this.favoriteBookMark.getFavorites()
  }
  newFavorite() {
    this.favoriteBookMark.newFavorite(this.favorite)
  }
}
