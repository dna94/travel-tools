import { Injectable } from '@angular/core';
import { Task } from '../domain/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = []

  upsertTask(task: Task): void {

  }

  removeTask(task: Task): void {

  }

  constructor() { }
}
