import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommond-page',
  templateUrl: './uncommond-page.component.html',
  styleUrls: ['./uncommond-page.component.css']
})
export class UncommondPageComponent {
//i18nSelect
public name: string = 'Jorge';
public gender: 'male'|'female' = 'male';
public invitationMap = {
  'male': 'invitalo',
  'female': 'invitala'

}
changeClient():void {
  this.name = 'Mayte';
  this.gender = 'female';
}


//i18nPlural
public clients:string[] = ['Jorge','Jorge Ruben','Ruben','Alexis Humberto','Jenny','Leyla'];
public clientsMap = {
  '=0':'no tenemos ningun cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  '=2':'tenemos 2 clientes esperando.',
  'other':'tenemos # clientes esperando.',
}
deleteClient(): void{
  this.clients.shift();
}

//KeyValue Pipe

public person = {
  name:'Jorge Ramirez',
  age: '40',
  address: 'Peru- Pucallpa',
}

//Async Pipe
public myObservableTimer: Observable<number> = interval(2000).pipe(
  tap(value => console.log('tap:', value))
)

public promiseValue: Promise<string> = new Promise((resolve,reject)=>{
  setTimeout(()=> {
    resolve('Tenemos data en la Promesa.')
  },3500);
});
}
