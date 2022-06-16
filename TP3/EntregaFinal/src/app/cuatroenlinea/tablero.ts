import { Fichas } from "./fichas";

export class Tablero {
  fichasrojas:Array<Fichas> = [];
  fichasazules:Array<Fichas> = [];
  x:number = 7;
  y:number = 6;
  radio:number = 15;
  cantfichas:number;

  constructor(private ctx:CanvasRenderingContext2D){
  }

  calcularfichas():void{
    this.cantfichas = (this.x*this.y)/2;
  }

  dibujar():void{
    var x=this.x;
    var y=this.y;
    // var tabespacios = ((x+1) * 5);
    this.seccionesfichas();

    //tablero

    this.ctx.strokeRect(140,180,520,400)
    this.ctx.stroke
    // this.ctx.fillRect(z * x, z * y, z, z);
  }

  seccionesfichas():void{
    var ctx=this.ctx;
     ctx.strokeRect(20,180,90,400);
     ctx.strokeRect(690,180,90,400);
     this.cargarfichas();
  }

  cargarfichas():void{
    this.calcularfichas();
    var radio = this.radio;
    var ctx = this.ctx;
    for (var i =0 ; i < this.cantfichas; i++) {
      var ficharoja = new Fichas(25+radio,185 + radio + 2*radio*i + 5*i,'#ff0000', radio,ctx);
      var fichaazul = new Fichas(695+radio,185 +radio + 2*radio*i + (5*i) ,'#0000ff', radio,ctx);
      fichaazul.dibujar();
      ficharoja.dibujar();
      this.fichasazules.push(fichaazul);
      this.fichasrojas.push(ficharoja);
    }
    console.log(this.fichasazules.length);
    }

}
