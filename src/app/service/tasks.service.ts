import { Injectable } from '@angular/core';
import { Task } from '../domain/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];
  task!: Task;
  keyList: string[] = [];

  constructor() { }

  //Will use the name of the task as the key for the local storage
  upsertTask(name: string, date: Date, done: boolean): void {
    let taskname = localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)!) : null;
    console.log("Taskname: ", taskname)
    if (taskname != null) {
      localStorage.removeItem(name);
    } else {
      this.keyList.push(name);
    }
    localStorage.setItem(name, JSON.stringify({ name, date, done }))
  }

  removeTask(name: string): void {
  }

  getTasks(): Task[] {
    this.tasks = [];
    this.keyList.map(key => {
      this.tasks.push(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : null)
    })
    return this.tasks;
  }

  FillMockTasks(): void {
    this.upsertTask("Prendere il caffè", new Date(), true);
    this.upsertTask("Finire il progetto", new Date(), false);
    this.upsertTask("Andare a pesca", new Date(), false);
  }

}
