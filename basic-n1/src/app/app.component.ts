import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //'tag' to add the component
  templateUrl: './app.component.html', // html layout 
  styleUrls: ['./app.component.scss'] // styles
})

export class AppComponent {

  now: Date = new Date();

}
