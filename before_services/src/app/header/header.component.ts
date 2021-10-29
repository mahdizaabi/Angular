import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Recipe} from "../recipes/recipe.modal";


@Component({
  selector: "app-header",
  templateUrl:"./header.component.html",
})
export class HeaderComponent {

  @Output() activePath  = new EventEmitter<string>();
  @Input() DropDownIsOpen: Boolean = false;
  constructor() {
  }
  setPath(path: string) {
    this.activePath.emit(path);
  }
}
