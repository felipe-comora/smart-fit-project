import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmartFitMainComponent } from './smart-fit-main/smart-fit-main.component';
import { SmartFitFormComponent } from './smart-fit-main/smart-fit-form/smart-fit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartFitMainComponent,
    SmartFitFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
