import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  accounts: { name: string; status: string; }[] = [];

  constructor(private accService: AccountsService) {
  }

  ngOnInit(): void {
    this.accounts = this.accService.accounts;
  }

}
