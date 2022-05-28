import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  Categorias : Category[] = [
    {
      name: 'Acción',
      icon:'./assets/images/category/icon-accion.svg',
      link:'accion'
    },
    {
      name: 'Multijugador',
      icon:'./assets/images/category/icon-.svg',
      link:'multijugador'
    },
    {
      name: 'Casino',
      icon:'./assets/images/category/icon-.svg',
      link:'casino'
    },
    {
      name: 'Aventura',
      icon:'./assets/images/category/icon-.svg',
      link:'aventura'
    },
    {
      name: 'de Mesa',
      icon:'./assets/images/category/icon-.svg',
      link:'juegos-de-mesa'
    },
    {
      name: 'Simulación',
      icon:'./assets/images/category/icon-.svg',
      link:'simulacion'
    },
    {
      name: 'Rompecabezas',
      icon:'./assets/images/category/icon-.svg',
      link:'rompecabezas'
    },
    {
      name: 'Clasicos',
      icon:'./assets/images/category/icon-.svg',
      link:'clasicos'
    },
    {
      name: 'Carreras',
      icon:'./assets/images/category/icon-.svg',
      link:'carreras'
    },  
  ]
}
