import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './pages/converter/converter.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskManagerComponent } from './pages/task-manager/task-manager.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [{
  component: ConverterComponent,
  path: 'converter'
 },
 {
  component: WeatherComponent,
  path: 'weather'
 },
 {
  component: TaskManagerComponent,
  path: 'task-manager'
 },
 {
  component: LoginComponent,
  path: 'login'
 },
 {
  redirectTo: 'login',
  path: '**'
 },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
