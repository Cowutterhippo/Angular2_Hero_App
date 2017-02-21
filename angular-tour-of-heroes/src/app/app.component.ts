import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dahsboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles:["app.component.css"]
})

export class AppComponent {
  title = 'Tour of Heroes';
}