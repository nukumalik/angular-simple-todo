import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [TaskService],
})
export class ItemsComponent implements OnInit {
  tasks: Task[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.taskService.getData().subscribe((item: Task[]) => (this.tasks = item));
  }

  onSave(task: Task) {
    this.taskService.addData(task).subscribe(() => this.getData());
  }

  onUpdateStatus(id: number | string, isDone: boolean): void {
    this.taskService.updateStatus(id, isDone).subscribe(() => this.getData());
  }

  onUpdateTitle(id: number | string, title: string): void {
    this.taskService.updateTitle(id, title).subscribe(() => this.getData());
  }

  onDelete(id: number | string): void {
    this.taskService.deleteData(id).subscribe(() => this.getData());
  }
}
