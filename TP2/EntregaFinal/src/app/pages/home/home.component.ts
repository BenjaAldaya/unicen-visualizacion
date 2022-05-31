import { Component, HostListener, OnInit } from '@angular/core';
import { Categorias } from '../../category-array';
import { Juegos } from '../../games-array';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  innerwidth:number = 0;
  totaljuegos:number = 0;
  juegosgrandes:number = 0;
  juegos = Juegos;
  categorias = Categorias;

  constructor() { }
  
  ngOnInit(): void {
    this.innerwidth = window.innerWidth;
    this.numberGames();
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
    }else if(this.innerwidth >= 1368){
      this.totaljuegos = 13;
      this.juegosgrandes = 5;
    }else{
      this.totaljuegos=9;
      this.juegosgrandes=3;
    }
  }
}