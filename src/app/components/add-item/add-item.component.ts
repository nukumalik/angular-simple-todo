import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Output() onSave = new EventEmitter();

  title: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleSave() {
    this.onSave.emit(this.title);
    this.title = '';
  }
}
