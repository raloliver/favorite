import { Component } from '@angular/core';
import { FavoriteConfiguration } from 'src/app/components/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  get = {
    title: 'Favorite App',
    isFavorite: false
  }

  onFavoriteChanged(favoriteConfig: FavoriteConfiguration) {
    console.warn('Favorited: ', favoriteConfig);
  }
}
