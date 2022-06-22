import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Juego } from './juego';

@Component({
  selector: 'app-cuatroenlinea',
  templateUrl: './cuatroenlinea.component.html',
  styleUrls: ['./cuatroenlinea.component.css']
})


export class CuatroenlineaComponent implements OnInit {
  @ViewChild('4enlinea', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  juego:Juego;
  width:number;
  heigth:number;
  modojuego:number;
  juegoiniciado:boolean=false;
  @Input() pointsj1:number;
  @Input() pointsj2:number;
  fondo:HTMLImageElement;
  minutos:number=0;
  segundos:number=0;
  tiempoJuego:number=2;
  timerId = setInterval(() => this.tick(), 100000);


  constructor() {
    this.minutos = 1;
    this.segundos = 59;
  }

  ngOnInit(): void {
    this.width = this.canvas.nativeElement.width;
    this.heigth = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.fondo = new Image();
    this.fondo.src = '../assets/images/games/cuatroenlinea/madera.jpg';
    this.fondo.onload = ()=>{
      this.ctx.drawImage(this.fondo,0,0,800,600);
      this.ctx.font= "bold italic 50px Lato"; 
      this.ctx.lineWidth = 3;
      this.ctx.strokeText('ELIJA UN MODO DE JUEGO',this.width/2,this.heigth/2,400);
      this.ctx.fillStyle= "white";
      this.ctx.fillText('ELIJA UN MODO DE JUEGO',this.width/2,this.heigth/2,400);
    }
    this.empezarjuego();
  }

  tick(): void{
    if(this.juego.ganador == 0 && --this.segundos < 0){
      this.segundos = 59;
      if(--this.minutos < 0){
        clearInterval(this.timerId);
        this.juego.ganador = 3;
      }
    }
  }

  empezarContador(){
    clearInterval(this.timerId);
    if(this.tiempoJuego==1){
      this.minutos = 0
      this.segundos = 59
    } else if(this.tiempoJuego==2){
      this.minutos = 1
      this.segundos = 59
    } else if(this.tiempoJuego==3){
      this.minutos = 4
      this.segundos = 59
    } else if(this.tiempoJuego==4){
      this.minutos = 9
      this.segundos = 59
    }
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  empezarjuego(){
    
    this.juego = new Juego(this.ctx,this.canvas,this.modojuego,this.fondo);
    this.juego.dibujarTablero();
  }

  reiniciarjuego(){
    this.juego.nuevoJuego();
    this.empezarContador();
  }

  continuarJuego(){
    this.juego.reiniciarJuego();
    this.empezarContador();
  }

  setColumnas(){
    this.juego.limpiarAll();
    this.empezarjuego();
    this.juegoiniciado = true;

    this.empezarContador();
  }

}
