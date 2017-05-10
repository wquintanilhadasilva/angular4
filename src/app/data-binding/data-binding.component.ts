import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /**styles: [`
      .higlight{
          background-color: yellow;
          font-weight: bold;
      }
      `
  ] **/
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual : string = '';
  valorSalvo: string = '';

  texto2 : string; //valor do input

  isMouseOver: boolean = false;

  listaDeCursos: any = ['AngularJS', 'Dot Net C#', 'Java EE', 'Arquitetura'];

  valorInicial: number = 15;

  valorEvento: number;

  constructor() {  
  }

  ngOnInit() {
    this.valorEvento = this.valorInicial;
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão pressionado!' + this.texto2);
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log('data-binding: ' + evento.novoValor);
    this.valorEvento = evento.novoValor;
  }

}