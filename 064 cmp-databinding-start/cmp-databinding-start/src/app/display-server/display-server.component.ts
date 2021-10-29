import {
  AfterContentChecked,
  AfterContentInit, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  templateUrl: "./display-server.component.html",
  selector: 'app-display-server',
  styleUrls: ['./display.css']
})
export class DisplayServerComponent implements
  OnInit,OnChanges,OnDestroy {
  @Input('displayUnit') element: {name:string, content: string, type:string};
  @Input() namex: string;
  @ViewChild('heading', {static:true}) header:ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraphContent: ElementRef;
  
  constructor() {
    console.log('constructor is called');
  }
  ngOnInit(): void {
  console.log('ngOnIt is called');
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChange==>${changes}`);
    console.log(changes);
  }

  ngOnDestroy() {
    console.log('ngDestroy is called()!')

  }
}
/*
ngDoCheck() {
    console.log("do check is no w running")
    console.log(this.header)
  }

  ngAfterContentInit() {
    console.log('ng  content init called!')
    console.log(this.paragraphContent)
  }
  ngAfterContentChecked() {
    console.log('ng after content checked called!')
  }
  ngAfterViewInit() {
    console.log('ng after view init called!')

  }
  ngAfterViewChecked() {
    console.log('ng after view checked called!')
  }
*/