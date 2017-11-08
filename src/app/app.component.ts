import { Component, OnInit } from '@angular/core';
import { EbHeaderComponent, EbHeaderService } from './eb-header/eb-header.component';
declare var AdminLTE: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private ebHeaderService:EbHeaderService) {
    
  }

  ngOnInit() {
    AdminLTE.init();
    this.ebHeaderService.nome = "João";
  }
}
