import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.open')
  clickDropDown : boolean;
  
  @HostListener('click')
  onDdclick()
  {
    this.clickDropDown = true;
  }
  @HostListener('mouseleave')
  onDdNotclick()
  {
  this.clickDropDown = false;
  }

}
