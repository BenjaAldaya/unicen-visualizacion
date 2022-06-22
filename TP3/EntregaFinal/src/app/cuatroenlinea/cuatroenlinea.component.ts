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
  juegoiniciado:boolean=false;
  @Input() pointsj1:number;
  @Input() pointsj2:number;

  constructor() {
  }

  ngOnInit(): void {
    this.width = this.canvas.nativeElement.width;
    this.heigth = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.empezarjuego();
  }

  empezarjuego(){
    this.juego = new Juego(this.ctx,this.canvas,this.modojuego);
    this.juego.dibujarTablero();
    this.juego.dibujarpanel();
  }

  reiniciarjuego(){
    this.juego.nuevoJuego();
  }

  setColumnas(){
    this.juego.limpiarAll();
    this.empezarjuego();
    this.juegoiniciado = true;
  }

}
