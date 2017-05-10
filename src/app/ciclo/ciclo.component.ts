import { Component,
  OnInit, 
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valor: number = 20;

  constructor() {
    this.show("construtor")
   }

  ngOnChanges() {
    this.show("ngOnChanges")
  }
  ngOnInit() {
    this.show("ngOnInit")
  }
  ngDoCheck() {
    this.show("ngDoCheck")
  }
  ngAfterContentInit() {
    this.show("ngAfterContentInit")
  }
  ngAfterContentChecked() {
    this.show("ngAfterContentChecked")
  }
  ngAfterViewInit() {
    this.show("ngAfterViewInit")
  }
  ngAfterViewChecked() {
    this.show("ngAfterViewChecked")
  }
  ngOnDestroy() {
    this.show("ngOnDestroy")
  }

  show(msg: string){
    console.log(msg)
  }

}
