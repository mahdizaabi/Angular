import {Directive, HostBinding, HostListener} from "@angular/core";


@Directive({
  selector: '[appDropdown]'
})
export class dropdownDirective {
  //@HostBinding: bind to the properties of the element where the directive is placed on.
 @HostBinding('class.open') isOpen = false;

  @HostListener('click') dropDownIsclicked() {
  this.isOpen = !this.isOpen;
  }
}
