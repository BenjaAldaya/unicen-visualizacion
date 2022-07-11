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

  player: any;
  obstaculoBajo : any;
  obstaculoAlto : any;
  contador : number;
  perdida: boolean = false;
  perdio : any;
  keypress :any;

  salto: any;
  agachar : any;

  fuego: any;


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


    this.player = document.getElementById('char');
    this.obstaculoBajo = document.getElementById('obstacle');
    this.obstaculoAlto = document.getElementById('obstacle2');
    this.contador = 0;

    this.perdio = setInterval(() =>{
      this.perdida = this.colision();
    },10)

    setInterval(() =>{
      if(this.perdida == false){
        this.generarFuego();
      }
    },2500)

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
    if(this.player.classList != "char-jump" && this.player.classList != 'char-slide'){
      this.player.classList.remove("char-run");
      this.player.classList.add("char-jump");
    }
    this.salto = setTimeout(() =>{
      this.player.classList.remove("char-jump");
      this.player.classList.add("char-run");
      this.contador++;
    },1500)
  }

  agacharse(){
    if(this.player.classList != "char-slide" && this.player.classList != "char-jump"){
      this.player.classList.remove('char-run');
      this.player.classList.add('char-slide');
      this.agachar = setTimeout(()=>{
        this.player.classList.remove('char-slide');
        this.player.classList.add('char-run');
      },500)
    }
  }

  colision():boolean{
    var playerTop = parseInt(window.getComputedStyle(this.player).getPropertyValue("top"))
    var blockLeftBajo = parseInt(window.getComputedStyle(this.obstaculoBajo).getPropertyValue("left"))
    var blockLeftAlto = parseInt(window.getComputedStyle(this.obstaculoAlto).getPropertyValue("left"))

    if(this.obstaculoAlto.style.display == 'none'){
      // Colision con el obstaculo bajo
      if(blockLeftBajo >= 50 && blockLeftBajo <= 90 && playerTop >= 390 && playerTop <= 500){
        clearTimeout(this.salto);
        clearTimeout(this.agachar);
        this.player.classList.remove('char-run');
        this.player.classList.remove('char-jump');
        this.player.classList.remove('char-slide');
        this.player.classList.add('char-die');
        setTimeout(() => {
          //Codigo cuando se muere el personaje
          this.player.classList.remove('char-die');
          this.player.classList.add('fijo');
        }, 1500);
        clearInterval(this.perdio);
        this.obstaculoBajo.style.display = 'none';
        return true;
      }
    }
     else if (this.obstaculoBajo.style.display == 'none'){
      // Colision con el obstaculo alto
      if(blockLeftAlto >= 50 && blockLeftAlto <= 90 && playerTop >= 225 && playerTop <= 400){
        clearTimeout(this.salto);
        clearTimeout(this.agachar);
        this.player.classList.remove('char-run');
        this.player.classList.remove('char-jump');
        this.player.classList.remove('char-slide');
        this.player.classList.add('char-die');
        setTimeout(() => {
          //Codigo cuando se muere el personaje
          this.player.classList.remove('char-die');
          this.player.classList.add('fijo');
        }, 1500);
        clearInterval(this.perdio);
        this.obstaculoAlto.style.display = 'none';
        return true;
    }

  }
  return false;
}

  generarFuego(){
      var random = Math.floor(Math.random() * 3);
      console.log(random);
      if(random == 0){
        this.obstaculoAlto.style.display = 'block';
        this.obstaculoBajo.style.display = 'none';
      } else {
        this.obstaculoAlto.style.display = 'none';
        this.obstaculoBajo.style.display = 'block';
      }
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
