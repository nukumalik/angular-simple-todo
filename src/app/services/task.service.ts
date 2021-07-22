import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../interfaces/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiURL: string = 'http://localhost:4300/tasks';

  constructor(private http: HttpClient) {}

  getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  addData(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, JSON.stringify(task), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  updateTitle(id: number | string, title: string): Observable<Task> {
    return this.http.patch<Task>(
      `${this.apiURL}/${id}`,
      JSON.stringify({ title }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  updateStatus(id: number | string, isDone: boolean): Observable<Task> {
    return this.http.patch<Task>(
      `${this.apiURL}/${id}`,
      JSON.stringify({ isDone }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  deleteData(id: string | number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiURL}/${id}`);
  }
}
