import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  showlogin:string = 'none';
  openLogin(s:string):void{
    this.showlogin = s;
  }
  
  closeLogin(c:string):void{
    this.showlogin = c;
  }
}
