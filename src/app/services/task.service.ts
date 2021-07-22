import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Send email to HR',
      isDone: false,
    },
    {
      id: 2,
      title: 'Fix dashboard issues',
      isDone: false,
    },
    {
      id: 3,
      title: 'Daily Stand Up on Mars project',
      isDone: false,
    },
  ];

  constructor() {}

  getData(): Task[] {
    return this.tasks;
  }

  addData(task: Task): void {
    if (!task?.id && !task?.title && !task?.isDone) return;
    this.tasks.push(task);
  }

  updateTitle(id: number, title: string): void {
    this.tasks = this.tasks.map((task) => {
      if (task?.id === id) return { ...task, title };

      return task;
    });
  }

  updateStatus(id: number): void {
    this.tasks = this.tasks.map((task: Task) => {
      if (task?.id === id) return { ...task, isDone: !task?.isDone };

      return task;
    });
  }

  deleteData(id: string | number): void {
    this.tasks = this.tasks.filter((task: Task) => task?.id !== id);
  }
}
