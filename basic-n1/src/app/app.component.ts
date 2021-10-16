import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //'tag' to add the component
  templateUrl: './app.component.html', // html layout 
  styleUrls: ['./app.component.scss'] // styles
})
export class AppComponent {
  title = 'Getting started with Angular'; 
  number = 20; 
  array = [1,2,"3"]; 

  object = {
    a: 'a', 
    b:{c:2}
  }; 

  users = [{name: 'Vlad'}, {name: 'Rita'}];
}
