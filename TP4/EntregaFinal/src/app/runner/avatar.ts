export class Avatar{

    ctx:CanvasRenderingContext2D;
    x:number;
    y:number;
    width: number;
    height: number;
    image: HTMLImageElement;


    constructor(ctx:CanvasRenderingContext2D){
        this.ctx = ctx;
        this.x = 0;
        this.y = 480;
        this.width = 133;
        this.height= 103;
        this.image = new Image();
        this.image.src = '../assets/images/games/runner/avatar/0.png';
    }


    public draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    public jump(){
        this.y = 400;
        this.image.src = '../assets/images/games/runner/avatar/7.png';
    }
}

