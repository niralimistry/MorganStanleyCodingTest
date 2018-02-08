import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { SortColumnComponent } from './sort-column/sort-column.component';
import { SortTableDirective } from './sort-column/sort-table.directive';
import{SortService} from './services/sort.service';

@NgModule({
  declarations: [
    AppComponent,
    SortColumnComponent,
    SortTableDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [SortService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
