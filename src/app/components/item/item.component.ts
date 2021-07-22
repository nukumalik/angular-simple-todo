import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() task: any;

  isEdit: boolean = false;
  title: string = '';

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.title = this.task.title;
  }

  handleEdit() {
    this.isEdit = true;
  }

  updateTitle(): void {
    this.taskService.updateTitle(this.task.id, this.title);
    this.isEdit = false;
  }
}
