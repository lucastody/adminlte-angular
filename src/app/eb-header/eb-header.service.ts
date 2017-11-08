import { Injectable } from '@angular/core';

@Injectable()
export class EbHeaderService {
  private nome:String;

  constructor() {

  }

  setNome(nome) {
    this.nome = nome;
  }

}
