import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ConverterComponent } from './pages/converter/converter.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskManagerComponent } from './pages/task-manager/task-manager.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  component: ConverterComponent,
  path: 'converter',
  canActivate: [AuthGuard]
},
{
  component: WeatherComponent,
  path: 'weather',
  canActivate: [AuthGuard]
},
{
  component: TaskManagerComponent,
  path: 'task-manager',
  canActivate: [AuthGuard]
},
{
  component: SignupComponent,
  path: 'signup',
  canActivate: [AuthGuard]
},
{
  component: LoginComponent,
  path: 'login',
},
{
  redirectTo: 'login',
  path: '**',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
