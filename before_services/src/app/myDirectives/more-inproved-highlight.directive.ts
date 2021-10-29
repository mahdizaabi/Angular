import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";


@Directive({
  selector: '[appImprovedHighlight2]'
})
export class moreInprovedHighlightDirective  implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private elemReference: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = 'blue'

  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = 'transparent'
  }

}
