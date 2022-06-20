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
  tablero:Tablero;
  fichaselec:Fichas | undefined;
  constructor(private ctx: CanvasRenderingContext2D ,private canvas:ElementRef<HTMLCanvasElement>){
    this.w = canvas.nativeElement.width;
    this.h =canvas.nativeElement.height;
    this.tablero = new Tablero(this.ctx,this.w,this.h,this.margen);
  }

  ngOnInit(): void {
  }



  dibujarTablero() {
    
    this.tablero.dibujar();
  }

  dibujarpanel(){
    this.ctx.strokeRect(this.margen,this.margen,this.w-this.margen*2,70);
  }
  
  mouseDown(event:MouseEvent){
  var {x,y}= this.tablero.getMousePosicion(event);
  this.setFichaSelect(x,y);
  }

  mouseMove(event:MouseEvent){
    if(this.fichaselec!=null){
      var {x,y} = this.tablero.getMousePosicion(event);
      if((y>this.tablero.inicioY+this.tablero.radio) && ((this.w-this.margen-this.tablero.secW-this.tablero.radio)>x) && (x>this.margen)){
        this.tablero.redibujar(this.fichaselec,x,y);
      }
    }
  }

  setFichaSelect(x:number,y:number):void{
    for(var i=0; i<this.tablero.fichas.length ;i++){
      if (this.tablero.fichas[i].clickeado(x,y)){
        this.fichaselec = this.tablero.fichas[i];
        console.log(i);
      }
    }
  }

  mouseUp(event:MouseEvent){
    if (this.fichaselec != undefined){
      var x = this.fichaselec.getX();
      var y = this.fichaselec.getY();
      this.fichaselec = undefined;
    }
  }
}
