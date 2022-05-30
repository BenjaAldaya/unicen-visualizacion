import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { Categorias } from '../category-array';
import { Games } from '../games';
import { filterGames } from '../filter-games';
import { Juegos } from '../games-array';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search : string = '';

  juegosFiltrados: any = [];

  constructor() { }
  categorias = Categorias
  filtrados = filterGames
  juegos = Juegos

  ngOnInit(): void {

    // const buscador = document.getElementById('search');
    // buscador?.addEventListener('keyup', () => {
    //   for(let juego of Juegos){
    //     let input = this.search.toLowerCase();
    //     let nombre = juego.nombre.toLowerCase();
    //     if(nombre.indexOf(input) !== -1){
    //       this.filtrados.push(juego);
    //       console.log(this.filtrados);
    //      } else {
    //        console.log('no encontre nada')
    //      }
    //    }
    // });
  }

  buscar(txt: string){
    this.juegosFiltrados = this.juegos.filter((juego: any) => {
     return juego.nombre.toLowerCase().indexOf(txt) > -1
    })

  }
  

  @Output() show = new EventEmitter<string>();
  
  ShowLoginModal():void{
    return this.show.emit('flex');
  }

}


