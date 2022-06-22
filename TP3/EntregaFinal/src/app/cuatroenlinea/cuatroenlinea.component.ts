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

  constructor() {
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

  empezarjuego(){
    
    this.juego = new Juego(this.ctx,this.canvas,this.modojuego,this.fondo);
    this.juego.dibujarTablero();
  }

  reiniciarjuego(){
    this.juego.nuevoJuego();
  }

  continuarJuego(){
    this.juego.reiniciarJuego();
  }

  setColumnas(){
    this.juego.limpiarAll();
    this.empezarjuego();
    this.juegoiniciado = true;
  }

}
