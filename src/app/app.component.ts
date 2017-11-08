import { Component, OnInit } from '@angular/core';
import { EbHeaderComponent } from './eb-header/eb-header.component';
import { EbHeaderService } from './eb-header/eb-header.service';
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
    this.ebHeaderService.setNome('João');
  }
}
