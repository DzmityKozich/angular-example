import {
  Component,
  DoCheck,
  inject,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Input,
  ViewChild,
  ElementRef,
  signal,
} from '@angular/core';
import { TestV19Service } from '../test-v19.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'child',
  imports: [ReactiveFormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [TestV19Service],
})
export class ChildComponent implements OnInit {
  // @Input() public xOx: string;
  public xOx = input('');

  amount = signal<number>(0);

  @ViewChild('someDiv') someDiv!: ElementRef<HTMLDivElement>;

  form = new FormGroup({
    name: new FormControl(''), // AbstractControl
    age: new FormControl(''),
  });

  service = inject(TestV19Service);

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges');
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }

  add() {
    this.amount.update((value) => value + 1);
    // this.amount.set(10);
  }

  substract() {
    this.amount.update((value) => value - 1);
  }

  ngOnInit() {
    console.log(this.someDiv);
    this.form.valueChanges.subscribe((value) => {
      console.log({ formValue: value });
    });
  }

  ngAfterViewInit() {
    console.log(this.someDiv);
  }

  public sayHello(): void {
    console.log('Hello');
    this.service.getUser().subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
