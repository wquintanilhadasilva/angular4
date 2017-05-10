import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  valorInicial: number = 5;
  exibir: boolean = true;

  mudarValor(){
    this.valorInicial++;
  }

  destruir(){
    this.exibir = false;
  }
  mostrar(){
    this.exibir = true;
  }
}
