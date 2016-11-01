// import {Component, OnInit} from '@angular/core';
// import {Consumidor, ConsumidorService} from '../../consumidores/shared/index';
// import {Router} from '@angular/router';
// import {Utilizador} from "../../utilizadores/shared/utilizador.model";
//
// @Component({
//     moduleId: module.id,
//     selector: 'navbar',
//     templateUrl: 'navbar.component.html',
//     styleUrls: ['navbar.component.css']
//
// })
// export class NavbarComponent implements OnInit{
//
//     isCollapsed = true;
//
//     user: Utilizador;
//
//     constructor(private router: Router,
//                 private consumidorService: ConsumidorService) {
//         if (consumidorService['token']) {
//         this.user = JSON.parse(localStorage.getItem('user-autenticado'));
//         }
//     }
//
//
//     logout(){
//        this.consumidorService.logout();
//         this.router.navigate(['/inicio']);
//     }
//
//     ngOnInit(): void {
//
//     }
//
//     public get menuIcon(): string {
//         return this.isCollapsed ? '☰' : '✖';
//     }
//
// }
