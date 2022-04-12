import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() task!:string;
  @Output() newTask = new EventEmitter<Task>();

  submit(){
    if(this.task==undefined){
        alert("cannot be empty")
    }else{
      this.newTask.emit(new Task(this.task,false))
    }
    
  }
}
