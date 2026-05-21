import { Component } from '@angular/core';
import { UserDashboardComponent } from './user-dashboard-component/user-dashboard-component';
import { Sidebar } from './shared/sidebar/sidebar';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [UserDashboardComponent, Sidebar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
