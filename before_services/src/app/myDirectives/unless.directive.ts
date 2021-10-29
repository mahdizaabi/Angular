import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";


@Directive({
  selector: '[appUnLess]'
})
export class UnlessDirective {
  @Input() set appUnLess(condition: boolean) {
    if(!condition) {
  this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
  this.viewContainerRef.clear();
    }
  }
//templateRef ==> reference to the whole block where the structural directivre is placed
  //elementRef: reference to the element where the directive is placed
  constructor(private templateRef:TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }

}
