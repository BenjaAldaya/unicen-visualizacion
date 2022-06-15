import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { Juegos } from 'src/app/games-array';
import { Categorias } from '../../category-array';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:boolean = false;

  search : string = '';
  juegos=Juegos;

  constructor() { }
  categorias = Categorias

  ngOnInit(): void {
  }


  @Output() show = new EventEmitter<string>();
  
  ShowLoginModal():void{
    return this.show.emit('flex');
  }

  Deslogear():void{
    this.login = false;
  }
  
  showHmb():void{
    console.log('hola');
    if(document.getElementById('hmb')?.classList.contains('none')){
      document.getElementById('hmb')?.classList.remove('none');
      document.getElementById('hmb')?.classList.add('display');
    }else{
      document.getElementById('hmb')?.classList.remove('display');
      document.getElementById('hmb')?.classList.add('none');
    }
  }

}


