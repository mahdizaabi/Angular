import { Component, Input } from '@angular/core';
import {AccountsService} from '../accounts.service';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  constructor(private logService: LoggingService, private accService: AccountsService) {
  }
  onSetTo(status: string) {
    this.accService.updateStatus(this.id, status)

    //emit the event from service
    this.accService.statusUpdated.emit(status)
    //this.logService.logStatusChange(status);
  }
}
