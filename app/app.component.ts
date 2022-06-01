import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  
  constructor(){

  }

  notFound : string = 'visibility';

  ngOnInit(): void {
    window.onload = function(){
      notFound = 'hidden';
    }
  }

  showlogin:string = 'none';
  openLogin(s:string):void{
    this.showlogin = s;
  }
  
  closeLogin(c:string):void{
    this.showlogin = c;
  }

  

  
}
