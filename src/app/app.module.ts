import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgPipesModule } from 'ngx-pipes';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData} from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgPipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
