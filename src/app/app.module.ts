import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskComponent } from './components/task/task.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CardComponent,
    ButtonComponent,
    TaskComponent,
    ViewAllComponent,
    RoundButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
