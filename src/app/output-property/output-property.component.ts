import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //,outputs:['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  valor: number = 0;
  
  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput') valorNaView: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementa(){
    //this.valor++;
    this.valorNaView.nativeElement.value++; //Altera o valor diretamente no componente da view sem chamar o evento bin-
    console.log('output-property: ' + this.valorNaView.nativeElement.value); 
    this.valor = this.valorNaView.nativeElement.value;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
