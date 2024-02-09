import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//Configuracion del Local
import localeEsPE from '@angular/common/locales/es-PE'
import localeFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';


registerLocaleData( localeEsPE);
registerLocaleData( localeFrCA);


@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ButtonModule,
    BrowserAnimationsModule,
    SharedModule,

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
