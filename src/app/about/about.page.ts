import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const state = this.route.snapshot.params as { username: string; password: string };
    console.log(this.username,this.password)
    if (state) {
      this.username = state.username;
      this.password = state.password;
    }
  }
}
