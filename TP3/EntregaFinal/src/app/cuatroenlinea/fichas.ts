export class Fichas {
  radio:number;
  x:number;
  y:number;
  ctx:CanvasRenderingContext2D;
  jugador:number;
  img:HTMLImageElement;

  constructor(x:number,y:number,radio:number,ctx:CanvasRenderingContext2D, jugador:number){
    this.x=x;
    this.y=y;
    this.radio=radio;
    this.ctx=ctx;
    this.jugador = jugador;
    this.img = new Image();
    if(this.jugador == 1){
      this.img.src = './assets/images/games/cuatroenlinea/ficha1.png';
    }else{
      this.img.src = './assets/images/games/cuatroenlinea/ficha2.png';
    }

  }

  getJugador(){
    return this.jugador;
  }

  getX(){
    return this.x;
  }

  setX(x:number){
      this.x = x;
  }
  
  getY(){
      return this.y;
  }
  
  setY(y:number){
      this.y = y;
  }
  
  // getColor(){
  //     return this.color;
  // }
  
  // setColor(color:string){
  //     this.color = color;
  // }
  
  dibujar(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    this.img.onload = ()=> {
      this.ctx.drawImage(this.img,this.x-this.radio,this.y-this.radio,this.radio*2,this.radio*2);
      this.ctx.fillStyle = 'black';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
      this.ctx.lineWidth = 1;
    }
    this.ctx.drawImage(this.img,this.x-this.radio,this.y-this.radio,this.radio*2,this.radio*2);
    this.ctx.fillStyle = 'black';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
    // this.ctx.fillStyle = this.color;
    // this.ctx.fill();
    this.ctx.lineWidth = 1;
  }
  

  clickeado(x:number,y:number):boolean{
    var dx = this.getX() - x;
    var dy = this.getY() - y;
    return Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2))<this.radio;
  }
  
}
