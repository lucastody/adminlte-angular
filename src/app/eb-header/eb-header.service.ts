import { Injectable } from '@angular/core';

@Injectable()
export class EbHeaderService {
  private nome:String;

  constructor() {

  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

}
