import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { EbHeaderModule } from './eb-header/eb-header.module';

import { EbMenuLeftComponent } from './eb-menu-left/eb-menu-left.component';
import { EbContentComponent } from './eb-content/eb-content.component';
import { EbFooterComponent } from './eb-footer/eb-footer.component';
import { EbPanelRightComponent } from './eb-panel-right/eb-panel-right.component';

@NgModule({
  declarations: [
    AppComponent,
    EbMenuLeftComponent,
    EbContentComponent,
    EbFooterComponent,
    EbPanelRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EbHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
