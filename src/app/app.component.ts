import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {
    //teste
  }

  ngOnInit() {
    AdminLTE.init();
  }
}
