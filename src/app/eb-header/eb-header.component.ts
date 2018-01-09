import { Component, OnInit } from '@angular/core';
import { EbHeaderService } from './eb-header.service';

@Component({
  selector: 'eb-header',
  templateUrl: './eb-header.component.html',
  styles: []
})
export class EbHeaderComponent implements OnInit {
  @Input() nome: String;
  @Input() teste: String;
  @Input() teste2: String;

  constructor(private ebHeaderService:EbHeaderService) {
    
  }

  ngOnInit() {
    this.nome = this.ebHeaderService.getNome();
  }
}