import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private logginService: LoggingService, private accService: AccountsService) {
    this.accService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
   this.accService.addAccount(accountName, accountStatus)
    /*
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    * /
     */
  //this.logginService.logStatusChange(accountStatus);
  }
}
