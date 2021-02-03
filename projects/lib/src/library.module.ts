import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TestLibraryComponent } from "./components/test-library/test-library.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    TestLibraryComponent
  ]
})
export class LibraryModule {
}