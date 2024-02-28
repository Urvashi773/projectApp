import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage  {

  username!: string ;
  password!: string;

  constructor(private router: Router) {}

  login() {
   
    this.router.navigate(['/about'], { state: { username: this.username, password: this.password } });
  }
}