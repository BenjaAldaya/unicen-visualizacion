import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  public innerwidth:number =0;
  
  constructor(){

  }

  ngOnInit(): void {
    this.innerwidth = window.innerWidth;
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.innerwidth = event.target.innerWidth;
    console.log(this.innerwidth);
  }

  showlogin:string = 'none';
  openLogin(s:string):void{
    this.showlogin = s;
  }
  
  closeLogin(c:string):void{
    this.showlogin = c;
  }

  

  
}
