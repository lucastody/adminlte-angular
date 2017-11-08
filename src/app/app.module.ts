import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EbHeaderComponent, EbHeaderService } from './eb-header/eb-header.component';

@NgModule({
  declarations: [
    AppComponent,
    EbHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: AppComponent },
    ])
  ],
  providers: [EbHeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
