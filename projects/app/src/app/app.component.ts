import { Component, ComponentFactoryResolver, Injector } from '@angular/core';
import { TestLibraryComponent } from 'projects/lib/src/components/test-library/test-library.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public componentReference;

  constructor(injector: Injector, componentFactoryResolver: ComponentFactoryResolver) {
    const factory = componentFactoryResolver.resolveComponentFactory(TestLibraryComponent);

    const componentRef = factory.create(injector);

    this.componentReference = componentRef;
  }
}
