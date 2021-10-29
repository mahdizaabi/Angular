import {LoggingService} from './logging.service';
import {Injectable, EventEmitter} from '@angular/core';


@Injectable()
export class AccountsService {
  accounts: {name:string, status:string}[] = [{'name':'mahdi', 'status': 'active'},
    {'name':'Alisa', 'status': 'inactive'}];
  statusUpdated = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {
  }
  addAccount(name:string, status:string) {
  this.accounts.push({
    name:name, status:status
  })
    this.loggingService.logStatusChange(status);}
  updateStatus(id:number, status:string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);

  }
}
