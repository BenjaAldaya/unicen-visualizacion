import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  
  constructor(){

  }

  notFound : string = 'block';

  ngOnInit(): void {
      setTimeout(() => {
        this.closeLoading();
      }, 1000);
  }

  closeLoading():void{
    this.notFound = 'none';
  }

  showlogin:string = 'none';
  openLogin(s:string):void{
    this.showlogin = s;
  }
  
  closeLogin(c:string):void{
    this.showlogin = c;
  }

  

  
}
