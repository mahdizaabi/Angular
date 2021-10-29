import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";


@Directive({
  selector: '[appImprovedHighlight]'
})
export class improvedBasicHighlightDirective  implements OnInit {
  constructor(private elemReference: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elemReference.nativeElement, "background-color", 'transparent')
  }
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elemReference.nativeElement, "background-color", 'yellow')
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elemReference.nativeElement, "background-color", 'transparent')
  }

}
