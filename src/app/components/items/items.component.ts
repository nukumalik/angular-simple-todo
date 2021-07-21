import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getData().subscribe((tasks) => (this.tasks = tasks));
  }

  onDelete(task: any) {
    this.tasks = this.tasks.filter((item) => item?.id !== task.id);
  }

  onDone(task: any) {
    this.tasks = this.tasks.map((item) =>
      item?.id === task?.id ? { ...item, isDone: !item?.isDone } : item
    );
  }

  onSave(title: string) {
    this.tasks.push({
      id: this.tasks[this.tasks.length],
      title,
      isDone: false,
    });
  }

  onUpdate(task: any, title: string) {
    this.tasks = this.tasks.map((item) => {
      if (item?.id === task.id) return { ...item, title };

      return item;
    });
  }
}
