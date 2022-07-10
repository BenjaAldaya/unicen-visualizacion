import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private logueado = new BehaviorSubject<boolean>(this.estaLogueado());
  private user:string = 'none';


  private estaLogueado():boolean{
    return !!localStorage.getItem('login');
  }

  loguear(){
    localStorage.setItem('login', 'true')
    this.logueado.next(true);
  }

  desloguear(){
    localStorage.removeItem('login');
    this.logueado.next(false);
  }

  getEstado(): Observable<boolean>{
    return this.logueado.asObservable();
  }

//   mostraruser():string{
//     if (this.logueado != false){
//       this.user='none'
//     }else{
//       this.user='block'
//     }
//     return this.user;
// }
}

