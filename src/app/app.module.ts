import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { EbHeaderComponent } from './eb-header/eb-header.component';

import { EbHeaderService } from './eb-header/eb-header.service';

@NgModule({
  declarations: [
    AppComponent,
    EbHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EbHeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
