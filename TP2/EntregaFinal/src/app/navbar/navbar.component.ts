import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categorias } from '../category-array';
;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  categorias = Categorias

  @Output() show = new EventEmitter<string>();
  
  ShowLoginModal():void{
    return this.show.emit('flex');
  }
}
