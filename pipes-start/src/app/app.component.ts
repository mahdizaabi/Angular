import {Component, Input} from '@angular/core';
import * as events from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive = 0;
  _filteredStatus = ''
  filteredStatus=""
  fetchedData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("data is fetched after 8 seconds")
    },800)
  })
/*
  set filteredStatus(value:string) {
    this._filteredStatus = value;
    console.log(value)
  }

  get filteredStatus() {
    return this._filteredStatus
  }
*/
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  server: any;
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  setColor(i){
    this.isActive = i;
  }


}
