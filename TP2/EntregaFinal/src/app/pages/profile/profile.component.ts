import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/games-array';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  juegos = Juegos;

  constructor() { }

  ngOnInit(): void {
  }

}
