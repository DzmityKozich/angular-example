import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CheckTestDirective } from './check-test.directive';
import { Subject, ReplaySubject, AsyncSubject } from 'rxjs';
import { UpperCaseDirective } from './upper-case.directive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChildComponent,
    CheckTestDirective,
    UpperCaseDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  title = 'v-19';
  showChild = true;

  list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  text = `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur libero maiores? Quisquam maiores earum beatae veniam deserunt at dolorum iste ipsa libero, quidem culpa, doloremque facere placeat ab quas.</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur libero maiores? Quisquam maiores earum beatae veniam deserunt at dolorum iste ipsa libero, quidem culpa, doloremque facere placeat ab quas.</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur libero maiores? Quisquam maiores earum beatae veniam deserunt at dolorum iste ipsa libero, quidem culpa, doloremque facere placeat ab quas.</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur libero maiores? Quisquam maiores earum beatae veniam deserunt at dolorum iste ipsa libero, quidem culpa, doloremque facere placeat ab quas.</p>
  <script>
    console.log('script');
  </script>`;

  @ViewChild('childComponent') childComponent!: ChildComponent;

  constructor() {
    setTimeout(() => {
      this.showChild = false;
    }, 5000);
  }

  ngOnInit() {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (value) => console.log(value),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();
    // subject.error({ message: 'error' });

    // subject.subscribe((newVal) => {
    //   console.log({ newVal });
    // });
  }

  ngAfterViewInit() {
    this.childComponent.sayHello();
  }
}
