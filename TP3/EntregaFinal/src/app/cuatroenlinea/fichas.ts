export class Fichas {
  radio:number;
  color:string;
  x:number;
  y:number;
  ctx:CanvasRenderingContext2D;

  constructor(x:number,y:number,color:string,radio:number,ctx:CanvasRenderingContext2D){
    this.x=x;
    this.y=y;
    this.color=color;
    this.radio=radio;
    this.ctx=ctx;
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

getColor(){
    return this.color;
}

setColor(color:string){
    this.color = color;
}

dibujar(){
  this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'black';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.lineWidth = 1;
}
}