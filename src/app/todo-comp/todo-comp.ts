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
  searchText:string = ""
  statusFilter:string= "all"

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

  clearAdd(){
    this.newTask = "";
  }

  completedTask(index:number):void{
    this.taskList[index].completed = !this.taskList[index].completed 
  }

  deleteTask(id:number):void{
    this.taskList = this.taskList.filter(item => item.id !== id)
  }

    get filteredTasks() {
      return this.taskList.filter(task => {
          const matchesSearch = task.title.toLowerCase().includes(this.searchText.toLowerCase());
          const matchesStatus =
            this.statusFilter === 'all' ||
            (this.statusFilter === 'completed' && task.completed) ||
            (this.statusFilter === 'active' && !task.completed);
    
          return matchesSearch && matchesStatus;
        });
    }

   
    clearSearch() {
      this.searchText = '';
    }

}
