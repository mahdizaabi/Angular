import {Directive, ElementRef, OnInit} from "@angular/core";


@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    //not the best approach to do this: avoid accessing html element directly!
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
