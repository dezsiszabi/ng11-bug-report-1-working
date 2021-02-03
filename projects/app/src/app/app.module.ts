import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { TestComponent } from './test/test.component';
import { LibraryModule } from 'libraryproj';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
