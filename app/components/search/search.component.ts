import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/games';
import { Juegos } from '../../games-array';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  juegosFiltrados: Games[] = [];
  search : string = '';
  juegos = Juegos ;
  notFound : string = 'visible';

  constructor() { }

  ngOnInit(): void {
  }

  buscar(txt: string){
    this.juegosFiltrados = this.juegos.filter((juego: any) => {
     return  juego.nombre.toLowerCase().indexOf(txt.toLowerCase()) > -1
    })

    if(this.search==''){
      this.juegosFiltrados = [];
    }
    if(this.juegosFiltrados.length == 0){ 
      this.notFound = 'visible';
    } else{
      this.notFound = 'hidden';
    }
  }


}
