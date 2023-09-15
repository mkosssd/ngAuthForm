import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHasNumber]',
})
export class HasNumberDirective {
  numEx = /\d/;
  constructor(private element: ElementRef) {}
  
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const val = this.element.nativeElement;
    let hasNum = this.numEx.test(val.value);
    
    if (hasNum) {
      val.classList.add('ng-invalid');
      val.classList.remove('ng-valid');
      console.log(val)
      val.validity = false
    } else {
      val.classList.remove('ng-invalid');
    }
  }
}
