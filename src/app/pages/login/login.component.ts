import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private route: Router) { }
  userName: string;

  Login() {
    sessionStorage.setItem('userName', this.userName);
    this.route.navigate(['/home']);
  }
}
