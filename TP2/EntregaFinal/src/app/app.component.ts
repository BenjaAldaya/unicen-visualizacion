import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  
  constructor(){

  }

  ngOnInit(): void {
    
  }

  showlogin:string = 'none';
  openLogin(s:string):void{
    this.showlogin = s;
  }
  
  closeLogin(c:string):void{
    this.showlogin = c;
  }

  

  
}
