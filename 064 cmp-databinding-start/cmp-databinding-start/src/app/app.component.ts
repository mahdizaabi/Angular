import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{

  serverElements = [{name:"texr", type:"server", content: "just a test"}];
  @ViewChild('container', {static:true}) divContainer: ElementRef;

  onServerAddedCB(serverData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintCB(serverData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  changePropertyValue() {
  this.serverElements[0].name = "name/property value has been changed..."
  }
  onDestroy(){
    this.serverElements.pop()
  }


  ngAfterViewChecked(): void {
    console.log('YYYYYYYYYYXXxxxxxxxxxxxxxxxxxxxxxYYYYYYYY')
    console.log(this.divContainer.nativeElement)
  }
}
