import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Task{
  id:number;
  title:string;
  completed:boolean;
}

@Component({
  selector: 'app-todo-comp',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-comp.html',
  styleUrl: './todo-comp.css'
})
export class TodoComp {
  taskList: Task [] = [];
  newTask:string = ""

  addTask():void{
    if(this.newTask.trim() !== ""){
      const newTaskItem : Task = {
        id : Date.now(),
        title : this.newTask,
        completed : false
      }
      this.taskList.push(newTaskItem)
      this.newTask = ""
    }
  }

  completedTask(index:number):void{
    this.taskList[index].completed = !this.taskList[index].completed 
    
  }

  deleteTask(id:number):void{
    this.taskList = this.taskList.filter(item => item.id !== id)
    console.log(this.taskList);
    
  }
}
