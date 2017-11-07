import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { TaskListHeadComponent } from './tasks/task-list-head.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskSummaryComponent } from './tasks/task-summary.component';
//Services
import { TaskService } from './services/tasks.service';
//Routes
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TaskListHeadComponent,
    TaskListComponent,
    TaskSummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
