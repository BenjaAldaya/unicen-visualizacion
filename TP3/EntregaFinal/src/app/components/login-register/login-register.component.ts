import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() close = new EventEmitter<string>();

  activelogin:boolean = true;
  activeregister:boolean = false;
  bgcolor:string="linear-gradient(180deg, #35ABD2 0%, #3CC2EF 51.56%, #154A5B 100%);"
  displaylogin:string="block";
  displayregister:string="none";

  changeToRegister():void{
    this.activelogin = false;
    this.activeregister = true;
    this.bgcolor = "linear-gradient(180deg, #ED6077 0%, #FC7C91 51.56%, #A04C59 100%)";
    this.displaylogin = 'none';
    this.displayregister = "block";
  }

  changeToLogin():void{
    this.activelogin= true;
    this.activeregister = false;
    this.bgcolor = "linear-gradient(180deg, #35ABD2 0%, #3CC2EF 51.56%, #154A5B 100%)";
    this.displaylogin = 'block';
    this.displayregister = "none";;
  }

  closeLogin():void{
    return this.close.emit('none');
  }
}
