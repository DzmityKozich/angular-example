import {
  Injectable,
  NgModule,
  Component,
  Pipe,
  Directive,
  PipeTransform,
} from '@angular/core';

/**
 * Component - структурная еденица, отвечает за отображение данных
 */
@Component({
  selector: 'component-selector', // опционально, но нужен, если компонент используется в шаблоне
  template: '<span>Hello</span>', // шаблон компонента
  templateUrl: './template.html', // шаблон компонента из файла
  standalone: true, // отвечает за то, будет ли компонент принадлежать к модулю
})
class SomeComponent {}

/**
 * Directive - структурная еденица, отвечает за изменение поведения элемента
 * Не имеет своего шаблона, "паразитирует" на view других элементов
 * Есть двух типов: структурные и атрибутные
 */
@Directive({
  selector: 'directiveSelector',
})
class SomeDirective {}

/**
 * Pipe - структурная еденица, отвечает за преобразование данных
 */
@Pipe({
  name: 'pipeName',
  pure: true, // отвечает за то, как будет работать pipe
})
class SomePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value;
  }
}

/**
 * Injectable - декоратор, который позволяет внедрять зависимости в класс
 * Работает с сервисами, отвечает за DI
 */
@Injectable({
  providedIn: 'root', // обозначем, на каком уровне будет доступен сервис
})
class SomeService {}

/**
 * NgModule - декоратор, который позволяет создавать модули
 * Модули - это контейнеры для компонентов, директив, пайпов и сервисов
 */
@NgModule({
  declarations: [SomeComponent, SomeDirective, SomePipe],
  providers: [SomeService],
  imports: [],
})
class SomeModule {}
