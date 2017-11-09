import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: AppComponent },
    ])
  ],
  declarations: []
})
export class AppRoutingModule { }
