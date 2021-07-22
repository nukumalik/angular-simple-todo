import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  title: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  handleSave() {
    this.taskService.addData({
      id: Math.random(),
      title: this.title,
      isDone: false,
    });
    this.title = '';
  }
}
