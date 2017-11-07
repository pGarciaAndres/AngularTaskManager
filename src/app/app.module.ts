import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
//Components
import { AppComponent } from './app.component';
import { TaskListHeadComponent } from './tasks/task-list-head.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskSummaryComponent } from './tasks/task-summary.component';
import { PriorityPipe, PriorityNamePipe } from './pipes/priority.pipe';
import { TypePipe } from './pipes/type.pipe';
//Services
import { TaskService } from './services/tasks.service';
//Routes
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TaskListHeadComponent,
    TaskListComponent,
    TaskSummaryComponent,
    PriorityPipe,
    PriorityNamePipe,
    TypePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // MatTooltipModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [ 
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
