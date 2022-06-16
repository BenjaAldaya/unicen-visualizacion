import { Fichas } from "./fichas";

export class Tablero {
  fichasrojas:Array<Fichas> = [];
  fichasazules:Array<Fichas> = [];
  //numero de filas y columnas que deberia tener la tabla (x se va a modificar para poder agregar mas columnas)
  x:number = 7;
  y:number = 6;
  //radio de los circulos
  radio:number = 15;
  //donde inicia las secciones de fichas y tablero
  inicioY:number=120;
  
  cantfichas:number;
  //margen vertical
  margen:number;
  //total width y heigh del canvas
  totalW:number;
  totalH:number;
  //ancho seccion fichas
  secW:number =120;

  radiotablero:number = this.radio+1;


  constructor(private ctx:CanvasRenderingContext2D,w:number,h:number,m:number){
    this.totalW = w;
    this.totalH = h;
    this.margen = m;
  }

  calcularfichas():void{
    this.cantfichas = (this.x*this.y)/2;
  }

  dibujar():void{
    var y=this.inicioY;
    var secH =this.totalH - this.margen - y;
    this.seccionesfichas(this.secW,secH);
    var tableroX = (this.margen*2)+this.secW;
    var tableroY = y;
    var tableroWidth = this.totalW-(this.margen*4)-(this.secW*2);
    var tableroHeight = secH;
    //tablero
    this.dibujartablero(tableroX,tableroY,tableroWidth,tableroHeight);
    // this.ctx.strokeRect((this.margen*2)+this.secW,y,this.totalW-(this.margen*4)-(this.secW*2),secH);
    //continuar codeo de tablero de izquierda a derecha en lo posible por columnas
  }

  dibujartablero(x:number,y:number,w:number,h:number){
    var ctx = this.ctx;
    var radio = this.radiotablero;
    ctx.strokeRect(x,y,w,h);
  }

  seccionesfichas(w:number,h:number):void{
    var ctx=this.ctx;
    var x1 = this.margen;
    var y = this.inicioY;
    var x2 = this.totalW-this.margen-w;
    ctx.textAlign = "center";
    ctx.strokeText('Jugador 1',x1+w/2,y-this.margen,w);
    ctx.strokeText('Jugador 2',x2+w/2,y-this.margen,w);
    
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
      //random utilizado abajo Math.floor(Math.random() * (max - min) + min;
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
