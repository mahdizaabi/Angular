import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  templateUrl: './server-unit.component.html',
  selector: 'app-server-unit'
})
export class ServerUnitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated  = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueServerCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  constructor() {
  }
  ngOnInit(): void {
  }
  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({serverName:newServerName.value, serverContent: this.newServerContent});
  }
  onAddBlueprint(newServerName: HTMLInputElement) {
    this.blueServerCreated.emit({serverName:newServerName.value, serverContent: this.newServerContent});
  }

}
