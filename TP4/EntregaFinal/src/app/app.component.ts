import { Component, HostListener, OnInit} from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  constructor(){

  }

  subject = new Subject<string>();

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

  closeLoginoutclick():void{
    this.showlogin = "none"
  }




}
