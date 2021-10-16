import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [ 
    AppComponent, // registering AppComponent
    AsideComponent // registering AsideComponent
  ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent] // launch AppComponent
})
export class AppModule { }
