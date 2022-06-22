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
  modojuego:number = 0;
  tiempoJuego:number = 2;
  juegoiniciado:boolean=false;
  @Input() pointsj1:number;
  @Input() pointsj2:number;
  timerId = setInterval(() => this.tick(), 10000);

  minutos : number;
  segundos : number;

  constructor() {
    this.minutos = 1;
    this.segundos = 59;
  }

  ngOnInit(): void {
    this.width = this.canvas.nativeElement.width;
    this.heigth = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.empezarjuego();
  }

  tick(): void{
    if(--this.segundos < 0){
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
    this.juego = new Juego(this.ctx,this.canvas,this.modojuego);
    this.juego.dibujarTablero();
    this.juego.dibujarpanel();
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
