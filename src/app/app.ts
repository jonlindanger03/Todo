import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComp } from './todo-comp/todo-comp';

@Component({
  selector: 'app-root',
  imports: [TodoComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
}
