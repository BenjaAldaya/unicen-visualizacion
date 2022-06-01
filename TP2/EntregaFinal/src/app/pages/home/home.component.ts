import { Component, HostListener, OnInit } from '@angular/core';
import { Categorias } from '../../category-array';
import { Juegos } from '../../games-array';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value:number=0
  innerwidth:number = 0;
  totaljuegos:number = 0;
  juegosgrandes:number = 0;
  juegoschicos:number = 0;
  juegos = Juegos;
  categorias = Categorias;

  constructor() { }

  ngOnInit(): void {
    this.innerwidth = window.innerWidth;
    this.numberGames();

    console.log(this.innerwidth);
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.innerwidth = event.target.innerWidth;
    this.numberGames();
  }

  numberGames():void{
    if (this.innerwidth >= 1920){
      this.totaljuegos= 18;
      this.juegosgrandes=7;
    }else if(this.innerwidth >= 1366){
      this.totaljuegos = 13;
      this.juegosgrandes = 5;
    }else if (this.innerwidth>=1200){
      this.totaljuegos=11;
      this.juegosgrandes=4;
    }else if (this.innerwidth>=1000){
      this.totaljuegos=9;
      this.juegosgrandes=3;
    }else if(this.innerwidth >=700){
      this.totaljuegos=10;
      this.juegosgrandes=2;
    }else{
      this.totaljuegos = 11;
      this.juegosgrandes = 1;
    }
  }

  // numberGames():void{
  //     if (this.innerwidth >= 1920){
  //       this.juegoschicos= 11;
  //       this.juegosgrandes=7;
  //     }else if(this.innerwidth >= 1366){
  //       this.juegoschicos = 8;
  //       this.juegosgrandes = 5;
  //     }else if (this.innerwidth>=1200){
  //       this.juegoschicos=7;
  //       this.juegosgrandes=4;
  //     }else if (this.innerwidth>=1000){
  //       this.juegoschicos=6;
  //       this.juegosgrandes=3;
  //     }else if(this.innerwidth >=700){
  //       this.juegoschicos=8;
  //       this.juegosgrandes=2;
  //     }else{
  //       this.juegoschicos = 10;
  //       this.juegosgrandes = 1;
  //     }
  //   }
}
