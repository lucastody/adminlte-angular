import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class EbHeaderService {
  nome:String;
}

@Component({
  selector: 'eb-header',
  templateUrl: './eb-header.component.html',
  styles: []
})
export class EbHeaderComponent implements OnInit {
  nome: String;

  constructor(private ebHeaderService:EbHeaderService) {
    
  }

  ngOnInit() {
    this.nome = this.ebHeaderService.nome;
  }
}