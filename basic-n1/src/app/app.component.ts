import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //'tag' to add the component
  templateUrl: './app.component.html', // html layout 
  styleUrls: ['./app.component.scss'] // styles
})
export class AppComponent {

  title = 'Getting started with Angular'; 
  class = 'main';

  inputValue = '';
  clickValue = '';

  badge = 'initial value';

  constructor() {
    setTimeout(() => {
      this.title = 'Second slogan binded';
      this.class = 'secondary';
    }, 5000);

  }

  // onInput(e: KeyboardEvent) {
  //   this.inputValue = (<HTMLInputElement>e.target).value;
  // }

  onInput(e: any) {
    this.inputValue = (<HTMLInputElement>e.target).value;
  }

  onIn(e: any) {
    this.badge = e.target.value;
  }

  onClick(e?: MouseEvent) {
    this.clickValue = 'Inserted!';
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
}
