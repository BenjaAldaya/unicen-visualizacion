import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-lg',
  templateUrl: './game-lg.component.html',
  styleUrls: ['./game-lg.component.css']
})
export class GameLGComponent implements OnInit {

  @Input() clase:string='sm';

  constructor() { }

  ngOnInit(): void {
  }

  @Input() juego:any;

}
