import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[upperCase]',
})
export class UpperCaseDirective {
  upperCase = input<number>(0);

  @HostBinding('style.text-transform') textTransform = 'none';

  ngOnInit() {
    this.transform();
  }

  transform() {
    if (this.upperCase() % 2 === 0) {
      this.textTransform = 'uppercase';
    } else {
      this.textTransform = 'none';
    }
  }
}
