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

  showHmb():void{
    console.log('hola');
    if(document.getElementById('hmb')?.classList.contains('none')){
      document.getElementById('hmb')?.classList.remove('none');
      document.getElementById('hmb')?.classList.add('display');
    }else{
      document.getElementById('hmb')?.classList.remove('display');
      document.getElementById('hmb')?.classList.add('none');
    }
  }

}


