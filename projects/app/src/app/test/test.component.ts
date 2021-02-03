import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  public people: any[] = [];

  constructor() {
    this.people = [{ name: 'Joe' }, { name: 'Jane' }];
  }
}
