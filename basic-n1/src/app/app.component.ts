import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //'tag' to add the component
  templateUrl: './app.component.html', // html layout 
  styleUrls: ['./app.component.scss'] // styles
})

export class AppComponent {

  toggleStyle: boolean = false;
  toggleClass: boolean = false;
  toggleTag: boolean = false;

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Second slogan binded';
    //   this.class = 'secondary';
    // }, 5000);
  }

}
