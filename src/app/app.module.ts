import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { TextChangerComponent } from './text-changer/text-changer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    DisplayComponent,
    ButtonComponent,
    TextChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
