import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [TaskService],
})
export class ItemsComponent implements OnInit {
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}
}
