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

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.empezarjuego();
  }

  empezarjuego(){
    this.juego=new Juego(this.ctx);
    this.juego.dibujarTablero();
    this.juego.dibujarpanel();
  }

}
