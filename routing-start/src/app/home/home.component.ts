import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../AuthService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  onLoadservers(id:string) {
    this.router.navigate(['/servers',id,'edit'],
      {queryParams:{allowEdit:1}, fragment: 'loading'});
  }
  handelLogin() {
   if(!this.auth.getLoggedin()) {
     this.auth.login()
   }
    else {this.auth.logout()
   }
  }
}
