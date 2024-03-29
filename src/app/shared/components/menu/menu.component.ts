import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [`h1 { align: center}`
  ]
})
export class MenuComponent implements OnInit  {
  public menuItems: MenuItem[] = [];

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon:'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: ' '
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommond'
          }
        ]
      },
      {
        label: 'Pipes Perzonalizados',
        icon:'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom',

          },
          {
            label: 'Numeros',
            icon: 'pi pi-pound',
            routerLink:'numbers'
          }
        ]
      },
      {
        label: 'Salir',
        icon:'pi pi-sign-out',
        items: [
          {
            label: 'Otro Elemento',
            icon: 'pi pi-cog'
          },

        ]
      },

    ]
  }


}
