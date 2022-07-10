import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Layer } from './layer';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {

  @ViewChild('runner', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  width:number;
  heigth:number;
  layers: Array<Layer> = [];
  gameSpeed: number;

  constructor() {}

  ngOnInit(): void {

    this.width = this.canvas.nativeElement.width;
    this.heigth = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.gameSpeed = 5;
    this.cargarFondo1();
    this.animate();
    setInterval(() =>{this.animate()}, 1000/60);

  }

  cargarFondo1():void{
    // Aca crearia el fondo del juego, cargando las respectivas imagenes al arreglo de Layers
    // Estaria bueno hacerlo en esta funcion, ya que podriamos pasarlo por parametros y asi tener distintos tipos de fondos, lo que nos daria la promocion
    var backgroundLayer1 = new Image();
    backgroundLayer1.src = '../assets/images/games/runner/layer-1.png';
    var backgroundLayer2 = new Image();
    backgroundLayer2.src = '../assets/images/games/runner/layer-2.png';
    var backgroundLayer3 = new Image();
    backgroundLayer3.src = '../assets/images/games/runner/layer-3.png';
    var backgroundLayer4 = new Image();
    backgroundLayer4.src = '../assets/images/games/runner/layer-4.png';
    var backgroundLayer5 = new Image();
    backgroundLayer5.src = '../assets/images/games/runner/layer-5.png';

    var layer1 = new Layer(this.ctx,backgroundLayer1,0.2,this.gameSpeed);
    var layer2 = new Layer(this.ctx,backgroundLayer2,0.3,this.gameSpeed);
    var layer3 = new Layer(this.ctx,backgroundLayer3,0.4,this.gameSpeed);
    var layer4 = new Layer(this.ctx,backgroundLayer4,0.5,this.gameSpeed);
    var layer5 = new Layer(this.ctx,backgroundLayer5,0.6,this.gameSpeed);


    this.layers.push(layer1,layer2,layer3,layer4,layer5);
  }

  animate(){
    this.ctx.clearRect(0,0,this.width,this.heigth);
    this.layers.forEach(event =>{
      event.update();
      event.draw();
    })

   }


}
