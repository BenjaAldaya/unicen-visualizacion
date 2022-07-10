import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Categorias } from '../../category-array';
import { Juegos } from '../../games-array';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class PlayGameComponent implements OnInit {


  constructor(private viewportScroller: ViewportScroller) { }

  juegos = Juegos;
  categorias = Categorias
  star = document.getElementById('btn-fav');
  share = document.getElementById('btn-share');
  handUp = document.getElementById('btn-hand-up');
  handDown = document.getElementById('btn-hand-down');
  juegoiniciado:boolean = false;

  ngOnInit(): void {

  }
  empezarjuego(){
    this.juegoiniciado = true;
  }
  starFill(): void{
    if(document.getElementById('btn-fav')?.classList.contains('bi-star')){
      document.getElementById('btn-fav')?.classList.remove('bi-star');
      document.getElementById('btn-fav')?.classList.add('bi-star-fill');
    } else {
      document.getElementById('btn-fav')?.classList.remove('bi-star-fill');
      document.getElementById('btn-fav')?.classList.add('bi-star');
    }
  }

  shareFill(): void{
    if(document.getElementById('btn-share')?.classList.contains('bi-share')){
      document.getElementById('btn-share')?.classList.remove('bi-share');
      document.getElementById('btn-share')?.classList.add('bi-share-fill');
    } else{
      document.getElementById('btn-share')?.classList.remove('bi-share-fill');
      document.getElementById('btn-share')?.classList.add('bi-share');
    }
  }

  ratingFillUp(): void{
    if(document.getElementById('btn-hand-up')?.classList.contains('bi-hand-thumbs-up')){
      document.getElementById('btn-hand-up')?.classList.remove('bi-hand-thumbs-up');
      document.getElementById('btn-hand-up')?.classList.add('bi-hand-thumbs-up-fill');
      document.getElementById('btn-hand-up')?.classList.add('bounce-7');
    } else{
      document.getElementById('btn-hand-up')?.classList.remove('bi-hand-thumbs-up-fill');
      document.getElementById('btn-hand-up')?.classList.remove('bounce-7');
      document.getElementById('btn-hand-up')?.classList.add('bi-hand-thumbs-up');
    }
  }

  scroll(scrollid : string):void{
    this.viewportScroller.scrollToAnchor(scrollid);
  }
}
