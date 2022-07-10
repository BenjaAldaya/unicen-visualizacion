import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/games-array';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor() { }
  juegos=Juegos;
  ngOnInit(): void {
  }

}
