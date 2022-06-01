import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { Categorias } from '../../category-array';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search : string = '';


  constructor() { }
  categorias = Categorias

  ngOnInit(): void {
  }


  @Output() show = new EventEmitter<string>();
  
  ShowLoginModal():void{
    return this.show.emit('flex');
  }

}


