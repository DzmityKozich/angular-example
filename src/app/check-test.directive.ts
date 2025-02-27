import { Directive } from '@angular/core';

@Directive({
  selector: 'checkTest, [checkTest]',
})
export class CheckTestDirective {
  constructor() {
    console.log('CheckTest created');
  }

  ngOnChanges() {
    console.log('ngOnChanges check test');
  }

  ngOnInit() {
    console.log('ngOnInit check test');
  }

  ngDoCheck() {
    console.log('ngDoCheck check test');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit check test');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked check test');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit check test');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked check test');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy check test');
  }
}
