import { Component, OnInit } from '@angular/core';
import { EbHeaderService } from './eb-header/eb-header.service';
import { EbFooterComponent } from './eb-footer/eb-footer.component';
declare var AdminLTE: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  teste:string;
  constructor(private ebHeaderService:EbHeaderService) {
    
  }

  ngOnInit() {
    AdminLTE.init();
    this.ebHeaderService.setNome('João');
  }
}
