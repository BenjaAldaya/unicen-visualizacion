import { Inject } from "@angular/core";
import {ElementRef, OnInit, Component} from "@angular/core";
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
  modojuego:number;
  pointsj1: number = 0;
  pointsj2: number = 0;
  ganador: number = 0;
  fondo:HTMLImageElement;

  constructor(private ctx: CanvasRenderingContext2D ,private canvas:ElementRef<HTMLCanvasElement>,@Inject('modojuego') private mj:number,fondo:HTMLImageElement){
    this.w = canvas.nativeElement.width;
    this.h =canvas.nativeElement.height;
    this.modojuego = mj;
    this.fondo =fondo;
    this.tablero = new Tablero(this.ctx,this.w,this.h,this.margen,this.modojuego,this.fondo);
    // fondo = ctx.createPattern()
  }

  cambiarFichas(ficha1:string, ficha2:string){
    this.tablero.setFichaP1(ficha1);
    this.tablero.setFichaP2(ficha2);
  }

  ngOnInit(): void {
  }

  dibujarTablero() {
    this.ctx.drawImage(this.fondo,0,0,800,600);
    // this.ctx.fillRect(0,0,800,600);
      this.tablero.dibujar();
  }

  dibujarpanel(){
    this.ctx.fillStyle = "rgba(108,53,2,0.8)";
    this.ctx.strokeRect(this.margen,this.margen,this.w-this.margen*2,70);
    this.ctx.fillRect(this.margen,this.margen,this.w-this.margen*2,70);
  }

  mouseDown(event:MouseEvent){
    if(this.ganador == 0){
      var {x,y}= this.tablero.getMousePosicion(event);
      this.setFichaSelect(x,y);
    }
  }

  mouseMove(event:MouseEvent){
    if(this.fichaselec!=null){
      var {x,y} = this.tablero.getMousePosicion(event);
      if(y>this.tablero.inicioY+this.tablero.radio && x<this.w-this.tablero.radio){
        this.fichaselec.setX(x);
        this.fichaselec.setY(y);
        this.tablero.redibujar(this.fichaselec);
        // console.log(this.w);
      }else if (y<=this.tablero.inicioY || x>=this.w-10) {
        this.fichaselec.setX(this.fichaselecX);
        this.fichaselec.setY(this.fichaselecY);
        this.tablero.redibujar(this.fichaselec);
        this.fichaselec = undefined;
      }
    }
  }

  redibujar(){
    this.tablero.redibujar(null);
  }

  setFichaSelect(x:number,y:number):void{
  // Esta funcion recorre 
    for(var i=0; i<this.tablero.fichas.length ;i++){
      if (this.tablero.fichas[i].clickeado(x,y)){
        this.fichaselec = this.tablero.fichas[i];
        this.fichaselecX = this.fichaselec.getX();
        this.fichaselecY = this.fichaselec.getY();
      }
    }
  }

  mouseUp(event:MouseEvent){
    if (this.fichaselec != undefined){
      var x = this.fichaselec.getX();
      var y = this.fichaselec.getY();
      // Sistema de turnos : Este sistema lee la constante this.turno, si no es divisible por dos es el turno del jugador 1
      // Ahora, ademas debera leer si la ficha fue colocada con exito, si no la devolvera a su lugar de origen, antes de ser movida.
      if(this.ganador == 0){
        if((!(this.turno%2==0)) && (this.fichaselec.getJugador() == 1)){
          // console.log(this.turno);
          if(this.tablero.colocar(this.fichaselec, x, y)){
            this.tablero.redibujar(null);
            this.turno++;
            if(this.verificarGanador() == 1){
              this.pointsj1 += 1;
            }
          }else{
            this.devolverFicha(this.fichaselec);
          }
        } else if (((this.turno%2==0)) && (this.fichaselec.getJugador() == 2)){
          if(this.tablero.colocar(this.fichaselec, x, y)){
            this.tablero.redibujar(null);
            this.turno++;
            if(this.verificarGanador() == 2){
              this.pointsj2 += 1;
            }
          } else{
            this.devolverFicha(this.fichaselec);
          }
        } else {
          this.devolverFicha(this.fichaselec);
          this.fichaselec = undefined;
        }
      } else {
        this.devolverFicha(this.fichaselec);
        this.fichaselec = undefined;
      }
      this.tablero.borrarDepositadores();
      this.fichaselec = undefined;
    }
  }

  devolverFicha(ficha:Fichas){
    ficha.setX(this.fichaselecX);
    ficha.setY(this.fichaselecY);
    this.tablero.redibujar(ficha);
  }


  verificarGanador(): number{
  if (this.tablero.verificarGanador() == 1){
    // this.pointsj1 += 1;
    // this.reiniciarJuego();
    this.ganador = 1;
    return 1;
  } else if (this.tablero.verificarGanador() == 2){
    // this.pointsj2 += 1;
    // this.reiniciarJuego();
    this.ganador = 2;
    return 2;
  } else if (this.tablero.verificarGanador() == 3){
    // Codigo de si hay empate
    this.ganador = 3;
    return 3;
  }else{
    this.ganador = 0;
    return 0;
  }
}

reiniciarJuego(){
  this.ganador = 0;
  this.ctx.clearRect(0,0,800,600);
  this.tablero.reiniciar();
  this.dibujarTablero();
  this.dibujarpanel();
}

nuevoJuego(){
  this.ganador = 0;
  this.ctx.clearRect(0,0,800,600);
  this.tablero.reiniciar();
  this.dibujarTablero();
  this.dibujarpanel();
  this.pointsj1 = 0;
  this.pointsj2 = 0;
}

limpiarAll(){
 this.ctx.clearRect(0,0,800,600);
}
}
