import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
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

  getData(): Observable<any[]> {
    return of(this.tasks);
  }
}
