import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";


@Directive({
  selector: '[appImprovedHighlight3]'
})
export class mmImprovedHighlightDirective  implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input('appImprovedHighlight3') highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elemReference: ElementRef, private renderer: Renderer2) {
    this.backgroundColor = this.defaultColor;

  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;

  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor =  this.defaultColor;
  }

}
