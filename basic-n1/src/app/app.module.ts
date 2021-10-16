import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [ 
    AppComponent, // registering AppComponent
    AsideComponent, // registering AsideComponent
    NewComponent // auto registering CLI ng g c new
  ],
  imports: [
    BrowserModule,
    FormsModule //Two way binding module [ndModel]
  ],
  providers: [],
  bootstrap: [AppComponent] // launch AppComponent
})
export class AppModule { }
