import { Component, OnInit } from '@angular/core';
import { Categorias } from '../category-array';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

  categorias = Categorias
}
