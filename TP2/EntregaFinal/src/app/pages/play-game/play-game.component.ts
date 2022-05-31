import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Categorias } from '../../category-array';
import { Juegos } from '../../games-array';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayGameComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  juegos = Juegos;
  categorias = Categorias
}