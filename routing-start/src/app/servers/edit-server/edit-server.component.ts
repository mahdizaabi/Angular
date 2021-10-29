import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {relative} from '@angular/compiler-cli/src/ngtsc/file_system';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {config, Observable} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';


  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe(
      (queryparams:Params) => this.allowEdit = queryparams['allowEdit'] === '1'
    )
    this.route.fragment.subscribe()

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id,
      {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo:this.route})
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
    && !this.changesSaved ) {
      return confirm('Do you want to discard changes');
    }
    return true;
  }

}
