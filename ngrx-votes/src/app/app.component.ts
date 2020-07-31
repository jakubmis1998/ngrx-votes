import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Post } from './post.model';
import * as PostActions from './post.actions';
import { Observable } from 'rxjs';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  post: Observable<Post>;
  color: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
    this.getRandomColor();
  }

  getRandomColor(): void {
    const letters = '0123456789ABCDEF';
    let randomHexColor = '#';
    for (let i = 0; i < 6; i++) {
      randomHexColor += letters[(Math.floor(Math.random() * 16))];
    }
    this.color = randomHexColor;
  }

  editText(text: string) {
    if (text) {
      this.getRandomColor();
      this.store.dispatch(new PostActions.EditText(text));
    }
  }

  resetPost() {
    this.getRandomColor();
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.getRandomColor();
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.getRandomColor();
    this.store.dispatch(new PostActions.Downvote());
  }
}
