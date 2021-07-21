import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data: any;

  @Output() onDelete = new EventEmitter();
  @Output() onDone = new EventEmitter();
  @Output() onSave = new EventEmitter();

  title: string = '';
  isEdit: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    if (this.data?.title) {
      this.title = this.data?.title;
    }
  }

  handleDelete() {
    this.onDelete.emit();
  }

  handleDone() {
    this.onDone.emit();
  }

  handleEdit() {
    this.isEdit = true;
  }

  handleSave() {
    this.onSave.emit(this.title);
    this.isEdit = false;
  }
}
