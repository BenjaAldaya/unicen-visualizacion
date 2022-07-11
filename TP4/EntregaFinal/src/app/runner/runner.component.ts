import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Layer } from './layer';
// import { Avatar } from './avatar'

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {

  // @ViewChild('runner', { static: true })
  // canvas: ElementRef<HTMLCanvasElement>;
  // private ctx: CanvasRenderingContext2D;
  // width:number;
  // heigth:number;
  // layers: Array<Layer> = [];
  // gameSpeed: number;
  // avatar:Avatar;

  chicken: any;
  obstacle: any;
  counter : number;
  lose: any;
  keypress :any;


  constructor() {}

  ngOnInit(): void {

    // this.width = this.canvas.nativeElement.width;
    // this.heigth = this.canvas.nativeElement.height;
    // this.ctx = this.canvas.nativeElement.getContext('2d')!;
    // this.gameSpeed = 5;
    // this.avatar = new Avatar(this.ctx);
    // this.cargarFondo1();
    // this.animate();
    // setInterval(() =>{this.animate()}, 1000/60);


    this.chicken = document.getElementById('char');
    this.obstacle = document.getElementById('obstacle');
    this.counter = 0;
    this.lose = setInterval(() =>{
      var chickenTop = parseInt(window.getComputedStyle(this.chicken).getPropertyValue("top"))
      var blockLeft = parseInt(window.getComputedStyle(this.obstacle).getPropertyValue("left"))
      // console.log(chickenTop);
      if(this.obstacle.style.display != 'none'){
        if(blockLeft>=60 && blockLeft<=100 && chickenTop<=435 && chickenTop >= 405){
          this.obstacle.style.animation = 'none';
          this.obstacle.style.display = 'none';
          this.obstacle.style.left = '100%';
          alert("Score:"+ this.counter);
        }
      }
    },10)

    document.addEventListener('keydown', (e) => {
      if(e.key == 'ArrowDown'){
        this.agacharse();
      }
    });
    document.addEventListener('keyup',(e)=>{
      if(e.key == 'ArrowUp'){
        this.jump();
      }
    });

  }
    
  jump(){
    if(this.chicken.classList != "animate" && this.chicken.classList != 'agacharse'){
      this.chicken.classList.add("animate");
    }
    setTimeout(() =>{
      this.chicken.classList.remove("animate");
      this.counter++;
    },500)
  }

  agacharse(){
    this.chicken.classList.remove('caminar');
    this.chicken.classList.add('agacharse');
    setTimeout(()=>{
      this.chicken.classList.remove('agacharse');
      this.chicken.classList.add('caminar');
    },500)
  }

  // cargarFondo1():void{
  //   // Aca crearia el fondo del juego, cargando las respectivas imagenes al arreglo de Layers
  //   // Estaria bueno hacerlo en esta funcion, ya que podriamos pasarlo por parametros y asi tener distintos tipos de fondos, lo que nos daria la promocion
  //   var backgroundLayer1 = new Image();
  //   backgroundLayer1.src = '../assets/images/games/runner/layer-1.png';
  //   var backgroundLayer2 = new Image();
  //   backgroundLayer2.src = '../assets/images/games/runner/layer-2.png';
  //   var backgroundLayer3 = new Image();
  //   backgroundLayer3.src = '../assets/images/games/runner/layer-3.png';
  //   var backgroundLayer4 = new Image();
  //   backgroundLayer4.src = '../assets/images/games/runner/layer-4.png';
  //   var backgroundLayer5 = new Image();
  //   backgroundLayer5.src = '../assets/images/games/runner/layer-5.png';

  //   var layer1 = new Layer(this.ctx,backgroundLayer1,0.6,this.gameSpeed);
  //   var layer2 = new Layer(this.ctx,backgroundLayer2,0.5,this.gameSpeed);
  //   var layer3 = new Layer(this.ctx,backgroundLayer3,0.4,this.gameSpeed);
  //   var layer4 = new Layer(this.ctx,backgroundLayer4,0.3,this.gameSpeed);
  //   var layer5 = new Layer(this.ctx,backgroundLayer5,0.2,this.gameSpeed);


  //   this.layers.push(layer1,layer2,layer3,layer4,layer5);
  // }

  // jump(){
  //   this.avatar.jump();
  // }

  // animate(){
  //   this.ctx.clearRect(0,0,this.width,this.heigth);
  //    this.layers.forEach(event =>{
  //      event.update();
  //      event.draw();
  //    })
  //    this.avatar.draw();
  //  }


}
