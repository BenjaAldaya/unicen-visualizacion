import { ViewChild, ElementRef, OnInit, Component } from "@angular/core";
import { Fichas } from "./fichas";
import { Tablero } from "./tablero";

@Component({
  template: ''
})

export class Juego implements OnInit {

  w:number;
  h:number;
  margen:number = 10;

  constructor(private ctx: CanvasRenderingContext2D ,private canvas:ElementRef<HTMLCanvasElement>){
    this.w = canvas.nativeElement.width;
    this.h =canvas.nativeElement.height;
  }

  ngOnInit(): void {
  }



  dibujarTablero() {
    this.ctx.fillStyle = 'red';
    const tablero = new Tablero(this.ctx,this.w,this.h,this.margen);
    tablero.dibujar();
  }

  dibujarpanel(){
    this.ctx.strokeRect(this.margen,this.margen,this.w-this.margen*2,70);
  }

}
