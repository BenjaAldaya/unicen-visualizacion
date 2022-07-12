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
  coin2:any;
  burbuja2:any;

  cartel:any;
  gameover: any;
  winner:any;
  panel:any;

  winnercondition:number;
  moneda: any;


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
    this.winnercondition = 5;
    this.panel = document.getElementById('panelcontrol');
    this.cartel = document.getElementById('cartel');
    this.winner = document.getElementById('winner');
    this.gameover = document.getElementById('gameover');
    this.player = document.getElementById('char');
    this.obstaculoBajo = document.getElementById('obstacle');
    this.obstaculoAlto = document.getElementById('obstacle2');
    this.coin = document.getElementById('coin');
    this.burbuja = document.getElementById('burbuja');
    this.coin2 = document.getElementById('coin2');
    this.burbuja2 = document.getElementById('burbuja2');
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
      },700)
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
      if(blockLeftBajo >= 90 && blockLeftBajo <= 150 && playerTop >= 390 && playerTop <= 500){
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
      if(blockLeftAlto >= 90 && blockLeftAlto <= 150 && playerTop >= 250 && playerTop <= 425){
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
      var random = Math.floor(Math.random() * 2);
      // console.log(random);
      // console.log(this.contador);
      if(random == 0){
        this.obstaculoAlto.style.display = 'block';
        this.obstaculoBajo.style.display = 'none';
      } else if(random == 1) {
        this.obstaculoAlto.style.display = 'none';
        this.obstaculoBajo.style.display = 'block';
      }
    }

    nohayMoneda():boolean{
        if(this.coin.classList != 'coin' && this.burbuja.classList != 'burbuja' && this.burbuja.classList != 'burbuja-die' && this.coin2.classList != 'coin2' && this.burbuja2.classList != 'burbuja2' && this.burbuja2.classList != 'burbuja-die2'){
          return true;
        }
      return false;
    }

  generarMoneda(){
    var random = Math.floor(Math.random() * 2);
    if(random == 0 && this.nohayMoneda()){
      this.coin.classList.add('coin');
      this.burbuja.classList.add('burbuja');
    }else if (random == 1 && this.nohayMoneda()){
      this.coin2.classList.add('coin2');
      this.burbuja2.classList.add('burbuja2');
    }
  }

  colisionMoneda():boolean{
    var playerTop = parseInt(window.getComputedStyle(this.player).getPropertyValue("top"));
    if  (this.coin.classList.contains('coin')){ // si es la moneda 1 
      var coinLeft = parseInt(window.getComputedStyle(this.coin).getPropertyValue("left"));
      if(coinLeft >= 80 && coinLeft <= 120 && playerTop >= 250 && playerTop <= 300){
        this.coin.classList.remove('coin');
        this.burbuja.classList.remove('burbuja');
        this.burbuja.classList.add('burbuja-die');
        // this.burbuja.style.left = coinLeft-13;
        setTimeout(()=>{
          this.burbuja.classList.remove('burbuja-die');
        },500)
        this.contadorMonedas += 1;
        if(this.contadorMonedas == this.winnercondition){
          this.findejuego();
        }
        return true;
      } else if (coinLeft <= 1) {
        this.coin.classList.remove('coin');
        this.burbuja.classList.remove('burbuja');
        this.burbuja.classList.remove('burbuja-die');
      }
      return false;
    }else{ // si es la moneda 2 
      var coinLeft2 = parseInt(window.getComputedStyle(this.coin2).getPropertyValue("left"))
      if(coinLeft2 >= 80 && coinLeft2 <= 120 && playerTop >= 400 && playerTop <= 450){
        this.coin2.classList.remove('coin2');
        this.burbuja2.classList.remove('burbuja2');
        this.burbuja2.classList.add('burbuja-die2');
        // this.burbuja2.style.left = coinLeft2;
        setTimeout(()=>{
          this.burbuja2.classList.remove('burbuja-die2');
        },500)
        this.contadorMonedas += 1;
        if(this.contadorMonedas == this.winnercondition){
          this.findejuego();
        }
        return true;
      }else if (coinLeft2 <= 1){
        this.coin2.classList.remove('coin2');
        this.burbuja2.classList.remove('burbuja2');
        this.burbuja2.classList.remove('burbuja-die2');
      }
    return false;
    }
  }

  reiniciarJuego(){
    this.contadorMonedas = 0;
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
    clearInterval(this.moneda);
  }

  limpiarMonedas(){
    this.coin.classList.remove('coin');
    this.burbuja.classList.remove('burbuja');
    this.burbuja.classList.remove('burbuja-die');
    this.coin2.classList.remove('coin2');
    this.burbuja2.classList.remove('burbuja2');
    this.burbuja2.classList.remove('burbuja-die2');
  }

  limpiarObstaculos(){
    this.obstaculoAlto.style.display='none';
    this.obstaculoBajo.style.display='none';
    this.obstaculoAlto.classList.remove('obstaculo');
    this.obstaculoBajo.classList.remove('obstaculo2');
  }

  findejuego(){
    this.limpiarMonedas();
    this.panel.style.display = 'none';
    this.cartel.style.display='flex';
    if (this.perdida){
      this.gameover.style.display='flex';
    }else{
      this.limpiarIntervalos();
      this.limpiarObstaculos();
      this.reiniciarJugador();
      this.winner.style.display='flex';
    }
  }

  iniciarJuego(){
    this.panel.style.display = 'flex';
    this.cartel.style.display='none';
    this.gameover.style.display='none';
    this.winner.style.display='none';

    this.perdio = setInterval(() =>{
      this.perdida = this.colision();
      if(this.coin.classList == 'coin' || this.coin2.classList == 'coin2' ){
          this.colisionMoneda();
      }
    },10)

    this.fuego = setInterval(() =>{
      if(this.perdida == false){
        this.generarFuego();
      }else{
        this.findejuego();
      }
    },2000)

    this.moneda = setInterval(() =>{
      this.contador = Math.floor(Math.random() * 3);
      if(this.contador <= 1){
        this.generarMoneda();
      }
    },1234)
  }


}
