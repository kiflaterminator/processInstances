import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ProcessCreationComponent }
  from './process-creation/process-creation.component';
import { ProcessesDatagridComponent }
  from './processes-datagrid/processes-datagrid.component';
import { ProcessService } from './process.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProcessesDatagridComponent,
    ProcessCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ProcessService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
