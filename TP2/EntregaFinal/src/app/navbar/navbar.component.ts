import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { Categorias } from '../category-array';
import { Games } from '../games';
import { filterGames } from '../filter-games';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search : String = '';

  constructor() { }

  ngOnInit(): void {

    const buscador = document.getElementById('search');
    buscador?.addEventListener('keyup', () => {
      for(let juego of Juegos){
        let input = this.search.toLowerCase();
        let nombre = juego.nombre.toLowerCase();
        if(nombre.indexOf(input) !== -1){
          this.filtrados.push
         } else {
           console.log('no encontre nada')
         }
       }
    });
  }
  
  categorias = Categorias
  filtrados = filterGames

  @Output() show = new EventEmitter<string>();
  
  ShowLoginModal():void{
    return this.show.emit('flex');
  }

}


