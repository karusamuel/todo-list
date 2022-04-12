import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  tasks = [
    new Task("cook",false),
    new Task("code",false),
    new Task("",false),
    new Task("cook",false)
  ]

  addNewTask(task:Task){
    this.tasks.push(task)
  }

}
