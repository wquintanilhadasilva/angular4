import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20,
    endereco: {
      rua: 'Rua 4'
    }

  }

}
