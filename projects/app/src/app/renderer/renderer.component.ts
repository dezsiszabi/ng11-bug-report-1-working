import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-renderer',
  template: '',
})
export class RendererComponent {
  private _componentReference: any;

  public get componentReference(): any {
    return this._componentReference;
  }

  @Input('component')
  public set componentReference(value: any) {
    this._componentReference = value;
    this.render();
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  private render(): void {
    this.viewContainerRef.insert(this.componentReference.hostView);
  }
}
