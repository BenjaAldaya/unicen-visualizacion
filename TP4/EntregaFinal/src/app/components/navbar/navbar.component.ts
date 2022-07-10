import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { Juegos } from 'src/app/games-array';
import { LoginService } from 'src/app/login.service';
import { Categorias } from '../../category-array';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  estaLogueado: boolean;

  search : string = '';
  juegos=Juegos;

  constructor(public loginService: LoginService) {
    loginService.getEstado().subscribe((estado: boolean) => {
      this.estaLogueado = estado;
    })
   }
  categorias = Categorias

  ngOnInit(): void {
  }


  @Output() show = new EventEmitter<string>();
  
  showLoginModal():void{
    return this.show.emit('flex');
  }

  deslogear():void{
    this.loginService.desloguear();
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


