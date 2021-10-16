import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  // styleUrls: ['./new.component.scss']
  styles: [`
    p{ font-size: 15px; color: purple;}  
  `] // inline styles
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
