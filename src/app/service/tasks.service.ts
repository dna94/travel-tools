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
      //Make Keylist persistent
      localStorage.removeItem("keylist");
      localStorage.setItem("keylist", JSON.stringify(this.keyList));
    }
    localStorage.setItem(name, JSON.stringify({ name, date, done }))
    this.getTasks();
  }

  removeTask(task: Task): void {

    let removeIndex = this.keyList.indexOf(task.name);
    this.keyList.splice(removeIndex, 1);

    localStorage.removeItem("keylist");
    localStorage.setItem("keylist", JSON.stringify(this.keyList));

    localStorage.removeItem(task.name);
  }

  getTasks(): Task[] {
    this.tasks = [];
    this.keyList = [];
    //this.tasks = JSON.parse(localStorage.getItem("keylist")!);
    this.keyList = localStorage.getItem("keylist") ? JSON.parse(localStorage.getItem("keylist")!) : [];
    console.log("Keylist Object: ", this.keyList);
    if (this.keyList) {
      this.keyList.map(key => {
        this.tasks.push(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : null)
      })
    }

    return this.tasks;
  }

  FillMockTasks(): void {
    this.upsertTask("Prendere il caffè", new Date(), true);
    this.upsertTask("Finire il progetto", new Date(), false);
    this.upsertTask("Andare a pesca", new Date(), false);
  }

}
