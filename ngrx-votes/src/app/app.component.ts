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

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText(text: string) {
    if (text.length > 0)
      this.store.dispatch(new PostActions.EditText(text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
