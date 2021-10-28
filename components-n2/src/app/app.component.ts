import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Post[] = [
    {
      title: 'Title One',
      text: 'Youre favorite ferendis in expedita fugiat repellat odit suscipit aliquam, pariatur, sit nobis tenetur officiis enim repudiandae consectetur tempore ad alias?',
      id: 1
    },
    {
      title: 'Title Two',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, odit corporis?',
      id: 2
    },
    {
      title: 'Title Three',
      text: 'Lpsum dolor sit amet, consectetur adipis, odit corporis',
      id: 2
    }
  ]

  addPost(post: Post) {
    console.log(post)
    this.posts.unshift(post);
  }
}
