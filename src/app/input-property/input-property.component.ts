import { Component, OnInit, Input } from '@angular/core';

/**
 * Componente que recebe as informações e as exibe na tela sem fazer interação com o servidor
 */
@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  ,inputs: ['listaDeCoisas: coisas'] //Forma três
})
export class InputPropertyComponent implements OnInit {

  @Input('paramCursos') //Forma um
  listaDeCursos: any[];

  @Input()  //Forma dois
  cursos: any[];

  listaDeCoisas: any[];

  destaque: boolean = true;

  constructor() {}

  ngOnInit() {
  }

  changeDestaque(item){
    this.destaque = !this.destaque;
    //console.log('Passou o item: ' + item);
  }

}
