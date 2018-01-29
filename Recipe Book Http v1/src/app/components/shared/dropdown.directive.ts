import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.querySelector('.dropdown-menu').className += ' show'
    } else {
      document.querySelector('.dropdown-menu').classList.remove('show');
    }
  }

  constructor() { }

}
 