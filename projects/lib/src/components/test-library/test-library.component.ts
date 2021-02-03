import { Component } from "@angular/core";

@Component({
  selector: 'test-library-component',
  templateUrl: './test-library.component.html'
})
export class TestLibraryComponent {
  public people: any[] = [];

  constructor() {
    this.people = [{ name: 'Joe' }, { name: 'Jane' }];
  }
}