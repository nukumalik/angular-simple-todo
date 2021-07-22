import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() task: any;

  @Output() onUpdateStatus = new EventEmitter();
  @Output() onUpdateTitle = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  isEdit: boolean = false;
  title: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = this.task.title;
  }

  handleEdit() {
    this.isEdit = true;
  }

  updateStatus() {
    this.onUpdateStatus.emit(!this.task.isDone);
  }

  updateTitle(): void {
    this.onUpdateTitle.emit(this.title);
    this.isEdit = false;
  }

  handleDelete() {
    this.onDelete.emit();
  }
}
