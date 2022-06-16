import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private logueado:boolean = false;
  private user:string = 'none';

  loguear(){
    if(this.logueado==false){
      this.logueado = true;
    }
  }

  desloguear(){
    if(this.logueado==true){
      this.logueado=false;
    }
  }

  getEstado(){
    return this.logueado;
  }

  mostraruser():string{
    if (this.logueado != false){
      this.user='none'
    }else{
      this.user='block'
    }
    return this.user;
}
}

