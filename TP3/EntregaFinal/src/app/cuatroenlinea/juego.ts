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
  fichaselecX:number;
  fichaselecY:number;
  turno:number = 1;

  
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
      if(y>this.tablero.inicioY+this.tablero.radio){
        this.fichaselec.setX(x);
        this.fichaselec.setY(y);
        this.tablero.redibujar(this.fichaselec);
      }
    }
  }

  redibujar(){
    this.tablero.redibujar(null);
  }

  setFichaSelect(x:number,y:number):void{
    for(var i=0; i<this.tablero.fichas.length ;i++){
      if (this.tablero.fichas[i].clickeado(x,y)){
        this.fichaselec = this.tablero.fichas[i];
        this.fichaselecX = this.fichaselec.getX();
        this.fichaselecY = this.fichaselec.getY();
        console.log(i);
      }
    }
  }

  mouseUp(event:MouseEvent){
    if (this.fichaselec != undefined){
      var x = this.fichaselec.getX();
      var y = this.fichaselec.getY();
      // Sistema de turnos : Este sistema lee la constante this.turno, si no es divisible por dos es el turno del jugador 1
      // Ahora, ademas debera leer si la ficha fue colocada con exito, si no la devolvera a su lugar de origen, antes de ser movida.
      if(this.verificarGandor() == 0){
        if((!(this.turno%2==0)) && (this.fichaselec.getJugador() == 1)){
          if(this.tablero.colocar(this.fichaselec, x, y)){
            this.tablero.redibujar(null);
            this.turno++;
          }else{
          this.fichaselec.setX(this.fichaselecX);
          this.fichaselec.setY(this.fichaselecY);
          this.tablero.redibujar(this.fichaselec);
          }
        } else if (((this.turno%2==0)) && (this.fichaselec.getJugador() == 2)){
          if(this.tablero.colocar(this.fichaselec, x, y)){
            this.tablero.redibujar(null);
            this.turno++;
          } else{
            this.fichaselec.setX(this.fichaselecX);
            this.fichaselec.setY(this.fichaselecY);
            this.tablero.redibujar(this.fichaselec);
          }
        } else {
          this.fichaselec.setX(this.fichaselecX);
          this.fichaselec.setY(this.fichaselecY);
          this.tablero.redibujar(this.fichaselec);
        }
      } else {
        this.fichaselec.setX(this.fichaselecX);
        this.fichaselec.setY(this.fichaselecY);
        this.tablero.redibujar(this.fichaselec);
      }
      this.fichaselec = undefined;
    }
  }


  verificarGandor():number{
  if (this.tablero.verificarGanador() == 1){
    // Codigo de si jugador 1 es ganador
    return 1;
  } else if (this.tablero.verificarGanador() == 2){
    // Codigo de si jugador 2 es ganador
    return 2;
  } else if (this.tablero.verificarGanador() == 3){
    // Codigo de si hay empate
    return 3;
  }
  return 0;
}

}
