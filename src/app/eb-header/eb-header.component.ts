import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eb-header',
  templateUrl: './eb-header.component.html',
  styles: []
})
export class EbHeaderComponent implements OnInit {
  @Input() nome: String;
  @Input() teste: String;
  @Input() teste2: String;

  constructor() {
    
  }

  ngOnInit() {
    
  }
}