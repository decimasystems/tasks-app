import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './services/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]

})
export class AppComponent {
  title = 'my tasks list';
}
