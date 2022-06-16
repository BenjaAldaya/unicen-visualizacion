import { Fichas } from "./fichas";

export class Tablero {
  fichasrojas:Array<Fichas> = [];
  fichasazules:Array<Fichas> = [];
  //numero de filas y columnas que deberia tener la tabla (x se va a modificar para poder agregar mas columnas)
  x:number = 7;
  y:number = 6;
  //radio de los circulos
  radio:number = 15;
  
  cantfichas:number;
  //margen vertical
  margen:number;
  //total width y heigh del canvas
  totalW:number;
  totalH:number;
  //tamaño seccion fichas
  secW:number =120;
  secH:number =400;

  constructor(private ctx:CanvasRenderingContext2D,w:number,h:number,m:number){
    this.totalW = w;
    this.totalH = h;
    this.margen = m;
  }

  calcularfichas():void{
    this.cantfichas = (this.x*this.y)/2;
  }

  dibujar():void{
    var x=this.x;
    var y=this.y;
    // var tabespacios = ((x+1) * 5);
    this.seccionesfichas(this.secW,this.secH);

    //tablero
    this.ctx.strokeRect((this.margen*2)+this.secW,180,520,400);
    // this.ctx.fillRect(z * x, z * y, z, z);
  }

  seccionesfichas(w:number,h:number):void{
    var ctx=this.ctx;
    var x1 = this.margen;
    var y = 180;
    var x2 = this.totalW-this.margen-w;
    this.ctx.textAlign = "center";
    this.ctx.strokeText('Jugador 1',x1+w/2,y-this.margen,w);
    this.ctx.strokeText('Jugador 2',x2+w/2,y-this.margen,w);
    
     ctx.strokeRect(x1,y,w,h);
     ctx.strokeRect(x2,y,w,h);
     this.cargarfichas(w,h,x1,x2,y);
  }

  cargarfichas(w:number,h:number,x1:number,x2:number,y:number):void{
    this.calcularfichas();
    var ctx = this.ctx;
    //radio de las fichas
    var radio = this.radio;
    //margent interno
    var m = 5;
    for (var i =0 ; i < this.cantfichas; i++) {
      //Math.floor(Math.random() * (max - min) + min;
      var fichaRojaX= Math.floor(Math.random() * ((w+x1-m-radio) - (x1+m+radio))) + (x1+m+radio);
      var fichasY = Math.floor(Math.random() * ((h+y-m-radio) - (y+m+radio))) + (y+m+radio);
      var fichaAzulX =Math.floor(Math.random() * ((w+x2-m-radio) - (x2+m+radio))) + (x2+m+radio);
      //solo se utilizan en caso de que las secciones sean distintas en altura o posicion de Y; 
      // var fichaRojaY= Math.floor(Math.random() * ((h+y-m-radio) - (y+m+radio))) + (y+m+radio);
      // var fichaAzulY =Math.floor(Math.random() * ((h+y-m-radio) - (y+m+radio))) + (y+m+radio);

      var ficharoja = new Fichas(fichaRojaX,fichasY,'#ff0000', radio,ctx);
      var fichaazul = new Fichas(fichaAzulX,fichasY ,'#0000ff', radio,ctx);
      fichaazul.dibujar();
      ficharoja.dibujar();
      this.fichasazules.push(fichaazul);
      this.fichasrojas.push(ficharoja);
    }
  }

}
