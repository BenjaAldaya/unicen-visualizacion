import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Juego } from './juego';
import { Tablero } from './tablero';

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

  constructor() {
  }

  ngOnInit(): void {
    this.width = this.canvas.nativeElement.width;
    this.heigth = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.empezarjuego();
  }

  empezarjuego(){
    this.juego = new Juego(this.ctx,this.canvas);
    this.juego.dibujarTablero();
    this.juego.dibujarpanel();
  }

  reiniciarjuego(){
    this.ctx.clearRect(0,0,800,600);
    this.juego = new Juego(this.ctx,this.canvas);
    this.juego.dibujarTablero();
    this.juego.dibujarpanel();
  }


}
