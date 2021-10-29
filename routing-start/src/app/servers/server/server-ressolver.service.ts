import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServersService} from '../servers.service';
import {Injectable} from '@angular/core';

interface server {
  id: number,
  name: string,
  status: string
}
@Injectable()
export class ServerRessolverService implements
  Resolve<server> {

  constructor(private serverSerivce: ServersService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<server> | Promise<server> | server {
    return this.serverSerivce.getServer(+route.params['id']);
  }

}
