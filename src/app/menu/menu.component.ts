import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items = [
    {name: 'Hoteles', href: ''},
    {name: 'Vuelos', href: ''},
    {name: 'Vuelo + Hotel', href: ''},
    {name: 'Paquetes', href: ''},
    {name: 'Disney', href: ''},
    {name: 'Escapadas', href: ''},
    {name: 'Seguros', href: ''},
    {name: 'Autos', href: ''},
    {name: 'Cruceros', href: ''},
    {name: 'OFERTAS', href: ''},
    {name: 'Más', href: '', iconRight: 'glyphicon glyphicon-menu-down'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
