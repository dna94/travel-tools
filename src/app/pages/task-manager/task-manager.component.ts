import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/domain/task';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  taskAddForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  tasks: Task[] = [];
  task!: Task;

  constructor(
    private tasksService: TasksService
  ) { }

  taskAddFormSubmit(): void {
    let name = this.taskAddForm.get('name')?.value;
    let date = this.taskAddForm.get('date')?.value;

    this.tasksService.upsertTask(name, date, false);

    this.tasks = []; //Non svuota, da trovare il modo per refreshare svuotando la lista ogni volta (dal service)
    this.tasks = this.tasksService.getTasks();
  }

  removeTask(task: Task): void {
    this.tasksService.removeTask(task);
    this.tasks = this.tasksService.getTasks();
  }

  ngOnInit(): void {
    //this.tasksService.FillMockTasks();
    this.tasks = this.tasksService.getTasks();
  }

  /*
  ngOnChanges(): void {
    this.tasks = this.tasksService.getTasks();
  }

  ngAfterViewInit(): void {
    this.tasks = this.tasksService.getTasks();
  }
  */


}
