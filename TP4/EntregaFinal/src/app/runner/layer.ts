export class Layer {

    ctx:CanvasRenderingContext2D;
    x:number;
    y:number;
    width: number;
    height: number;
    x2: number;
    image: HTMLImageElement;
    speedModifier: number;
    speed: number;
    gameSpeed: number;


    constructor(ctx:CanvasRenderingContext2D, image:HTMLImageElement, speedModifier : number, gameSpeed: number){
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.gameSpeed = gameSpeed;
        this.speed = this.gameSpeed * this.speedModifier;
    }

    public update(){
        this.speed = this.gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    public draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}