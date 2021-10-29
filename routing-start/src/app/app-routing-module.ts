import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGaurdService} from './auth-gaurd.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerRessolverService} from './servers/server/server-ressolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]
  },
  {
    path: 'servers',
    //canActivate: [AuthGaurdService],
    canActivateChild: [AuthGaurdService],
    component: ServersComponent,
    children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerRessolverService}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard]},
    ]
  },
  //{path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data:{message: 'page not found!'} },
  {path: '**', redirectTo: 'not-found'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: []
})
//export: tell to Angular what module should be exposed/accessed on the module tha need to Import this module
export class AppRoutingModule {

}
