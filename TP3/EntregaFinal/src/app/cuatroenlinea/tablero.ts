import { Fichas } from "./fichas";

export class Tablero {
  fichas:Array<Fichas> = [];
  //numero de filas y columnas que deberia tener la tabla (x se va a modificar para poder agregar mas columnas)
  x:number = 7;
  y:number = 6;
  //radio de los circulos
  radio:number = 20;
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


  
  tablero : Array<any> = [];
  depositadores : Array<any> = [];
  


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
    this.dibujarPrincipal(tableroX,tableroY);
    this.dibujarDepositadores();


    console.log(this.depositadores);
  }

  dibujartablero(x:number,y:number,w:number,h:number){
    var ctx = this.ctx;
    ctx.strokeRect(x,y,w,h);
  }


  dibujarPrincipal(x:number,y:number){
    var ctx = this.ctx;
    var radio = this.radiotablero;

    var margen = 10;
    var origenX = x + margen *10;
    var origenY = y + margen *10;


    var calculoX : number = origenX;
    // Calculo X va a ser la posicion X donde se esta creando la ficha del tablero desocupado, y lo quiero guardar ya que en mi matriz logica voy a guardar los datos asi son mas facil de dibujar luego
    // CalculoX = OrigenX + margen + radio/2;
    var calculoY : number = origenY;
    // CalculoY = OrigenY + margen + altura/2;
    

     for(var i = 0; i < this.y ; i++){
       // por cada fila de la matriz
       // debera modificar calculoY para que se use en toda la generacion de espacios desocupados
       calculoX = origenX;
       let columna : Array<any> = new Array();
         for(var j = 0; j < this.x ; j++){
           // por cada espacio de la columna
           // Aca debera crear una figura de canvas desocupada en el tablero y guardar la posicion X, posicion Y en la matriz logica.
          this.dibujarDesocupado(ctx, calculoX, calculoY, radio);

          var tmp = {
             ocupado: false,
             posX: calculoX,
             posY: calculoY,
          }
          // console.log("X:"+calculoX+" Y:"+calculoY);
          //Ahora debera actualizar la posicion X en la proxima figura canvas
          calculoX += margen + (radio*2);
          columna.push(tmp);

         }

         //Ahora debera actualizar la posicion Y para la proxima fila
        calculoY += margen + (radio*2);
        this.tablero.push(columna);
     }
  }

  dibujarDepositadores(){
    var margen = 10 ;
    var alto = 30;
    var ancho = this.radio*2 + 5;

    for(var i = 0; i < this.x; i++){
      var minX = this.tablero[0][i].posX - margen * 2.2;
      var minY = this.tablero[0][i].posY - this.radio - margen * 5;

      var tmp = {
        x : minX,
        y : minY,
        ancho : ancho,
        alto : alto,
        columna : i
      }

      this.ctx.strokeRect(minX,minY,ancho,alto);
      this.depositadores.push(tmp);
    }
  }

  dibujarDesocupado(ctx:any, x:number, y:number, radio:number){
    ctx.beginPath();
          ctx.arc(x, y, radio, 0, 2 * Math.PI);
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.lineWidth = 1;
  }

  dibujarOcupado(ctx:any, x:number, y:number, radio:number, color:string){
    ctx.beginPath();
          ctx.arc(x, y, radio, 0, 2 * Math.PI);
          ctx.fillStyle = 'black';
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.fillStyle = color;
          ctx.fill();
          ctx.lineWidth = 1;
  }

  colocarFicha(columna:number, color:string){
    // Esta funcion encuentra una posicion del arreglo donde este desocupado y coloca la ficha del color que le pasaron.

    var maxH = this.y - 1;
    if(columna<=this.x){
      for(let i = maxH ; i >= 0; i--){
         if(this.tablero[i][columna].ocupado == false){
           this.dibujarOcupado(this.ctx, this.tablero[i][columna].posX , this.tablero[i][columna].posY, this.radio, color);
           this.tablero[i][columna].ocupado = true;
           return;
         }
      }
    }
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

      this.fichas.push(fichaazul);
      this.fichas.push(ficharoja);
    }
  }
  //devuelve posicion del mouse
  getMousePosicion(event: MouseEvent) : {x:number,y:number}{
    var clickX =  Math.round(event.clientX - this.ctx.canvas.getBoundingClientRect().x);
    var clickY = Math.round(event.clientY - this.ctx.canvas.getBoundingClientRect().y);    
    return {x:clickX , y:clickY};
  }
  
  redibujar(ficha:Fichas,x:number,y:number){
    var y=this.inicioY;
    var secH =this.totalH - this.margen - y;
    this.redibujarSecciones(this.secW,secH);
    var tableroX = (this.margen*2)+this.secW;
    var tableroY = y;
    var tableroWidth = this.totalW-(this.margen*4)-(this.secW*2);
    var tableroHeight = secH;
    //tablero
    this.dibujartablero(tableroX,tableroY,tableroWidth,tableroHeight);
    // this.ctx.strokeRect((this.margen*2)+this.secW,y,this.totalW-(this.margen*4)-(this.secW*2),secH);
    //continuar codeo de tablero de izquierda a derecha en lo posible por columnas
    this.dibujarPrincipal(tableroX,tableroY);
    this.dibujarDepositadores();
    ficha.setPosicion(x,y);
  }
  
  redibujarSecciones(w:number,h:number):void{
    var ctx=this.ctx;
    var x1 = this.margen;
    var y = this.inicioY;
    var x2 = this.totalW-this.margen-w;
    ctx.textAlign = "center";
    ctx.strokeText('Jugador 1',x1+w/2,y-this.margen,w);
    ctx.strokeText('Jugador 2',x2+w/2,y-this.margen,w);
    
     ctx.strokeRect(x1,y,w,h);
     ctx.strokeRect(x2,y,w,h);
  }
  redibjarFichas(){
    for (let i=0; i<=this.fichas.length;i++){
      this.fichas[i].dibujar();
    }
  }

}
