import { ViewChild, ElementRef, OnInit, Component } from "@angular/core";
import { Fichas } from "./fichas";
import { Tablero } from "./tablero";

@Component({
  template: ''
})

export class Juego implements OnInit {
  constructor(private ctx: CanvasRenderingContext2D){
  }

  ngOnInit(): void {
  }



  dibujarTablero() {
    this.ctx.fillStyle = 'red';
    const tablero = new Tablero(this.ctx);
    tablero.dibujar();
  }

  dibujarpanel(){
    this.ctx.strokeRect(20,20,760,60);
    var text1 = this.ctx.strokeText('Jugador 1',20,160,90);
    var text2 = this.ctx.strokeText('Jugador 2',690,160,90);
  }

}
