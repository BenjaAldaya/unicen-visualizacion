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
  contadorMonedas:number;
  muerte : any;
  salto: any;
  agachar : any;

  fuego: any;

  coin:any;
  burbuja:any;


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
    this.coin = document.getElementById('coin');
    this.burbuja = document.getElementById('burbuja');
    this.contador = 0;
    this.contadorMonedas = 0;

    this.iniciarJuego();

    var arrow_keys_handler = function(e: { code: any; preventDefault: () => void; }) {
      switch(e.code){
          case "ArrowUp": case "ArrowDown": e.preventDefault(); break;
          default: break; // do not block other keys
      }
    };
    window.addEventListener("keydown", arrow_keys_handler, false);


    document.addEventListener('keydown', (e) => {
      if(e.key == 'ArrowDown' && this.player.classList == "char-run"){
        this.agacharse();
      }
    });
    document.addEventListener('keyup',(e)=>{
      if(e.key == 'ArrowUp' && this.player.classList == "char-run"){
        this.jump();
      }
    });

  }
    
  jump(){
      this.player.classList.remove("char-run");
      this.player.classList.add("char-jump");
      this.salto = setTimeout(() =>{
        this.player.classList.remove("char-jump");
        this.player.classList.add("char-run");
        this.contador++;
      },1500)
  }

  agacharse(){
      this.player.classList.remove('char-run');
      this.player.classList.add('char-slide');
      this.agachar = setTimeout(()=>{
        this.player.classList.remove('char-slide');
        this.player.classList.add('char-run');
      },500)
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
        this.muerte = setTimeout(() => {
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
        this.muerte = setTimeout(() => {
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
      this.contador = Math.floor(Math.random() * 4);
      var random = Math.floor(Math.random() * 2);
      console.log(random);
      console.log(this.contador);
      if(random == 0){
        this.obstaculoAlto.style.display = 'block';
        this.obstaculoBajo.style.display = 'none';
        if(this.contador >= 3 && this.coin.classList != 'coin' && this.burbuja.classList != 'burbuja' && this.burbuja.classList != 'burbuja-die'){
          this.generarMoneda();
        }
      } else if(random == 1) {
        this.obstaculoAlto.style.display = 'none';
        this.obstaculoBajo.style.display = 'block';
        if(this.contador >= 3 && this.coin.classList != 'coin' && this.burbuja.classList != 'burbuja' && this.burbuja.classList != 'burbuja-die'){
          this.generarMoneda();
        }
      }
    }

  generarMoneda(){
    this.coin.classList.add('coin');
    this.burbuja.classList.add('burbuja');
  }

  colisionMoneda():boolean{
    var playerTop = parseInt(window.getComputedStyle(this.player).getPropertyValue("top"));
    var coinLeft = parseInt(window.getComputedStyle(this.coin).getPropertyValue("left"));

    if(coinLeft >= 50 && coinLeft <= 90 && playerTop >= 225 && playerTop <= 300){
      this.coin.classList.remove('coin');
      this.burbuja.classList.remove('burbuja');
      this.burbuja.classList.add('burbuja-die');
      this.burbuja.style.left = coinLeft-13;
      setTimeout(()=>{
        this.burbuja.classList.remove('burbuja-die');
      },2000)
      this.contadorMonedas += 1;
      console.log("Moneda agarrada, total:" + this.contadorMonedas);
      return true;
    } else if (coinLeft <= 10) {
      this.coin.classList.remove('coin');
      this.burbuja.classList.remove('burbuja');
      this.burbuja.classList.remove('burbuja-die');
    }
    return false;
  }

  reiniciarJuego(){
    this.limpiarMonedas();
    this.limpiarIntervalos();
    this.reiniciarJugador();
    this.iniciarJuego();
  }

  reiniciarJugador(){
    this.player.classList.remove('fijo');
    this.player.classList.remove('char-die');
    this.player.classList.remove('char-slide');
    this.player.classList.remove('char-jump');
    this.player.classList.remove('char-run');
    this.player.classList.add('char-run');
  }

  limpiarIntervalos(){
    clearInterval(this.perdio);
    clearTimeout(this.salto);
    clearTimeout(this.agachar);
    clearTimeout(this.muerte);
    clearInterval(this.fuego);
  }

  limpiarMonedas(){
    this.contadorMonedas = 0;
    this.coin.classList.remove('coin');
    this.burbuja.classList.remove('burbuja');
    this.burbuja.classList.remove('burbuja-die');
  }

  iniciarJuego(){

    this.perdio = setInterval(() =>{
      this.perdida = this.colision();

      if(this.coin.classList == 'coin'){
          this.colisionMoneda();
      }
    },10)

    this.fuego = setInterval(() =>{
      if(this.perdida == false){
        this.generarFuego();
      }
    },2500)
  }


}
