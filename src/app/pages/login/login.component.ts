import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(
    private userService: UserService,
  ) { }

  loginFormSubmit() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    //Chiamata al service, input mail e pass, output bool 

    let success = this.userService.loginResult(email, password)
    console.log(success)

    if (success == true) {
      window.alert("Benvenuto, procedi navigando tramite i route sottostanti: ")
    }

    if (success == false) {
      window.alert("Credenziali non valide, ripetere con credenziali valide")
    }


  }

  ngOnInit(): void {

    localStorage.setItem("isLoggedIn", "false")

    this.userService.addUser({
      name: "admin",
      surname: "admin",
      email: "admin@admin.com",
      birthdate: new Date(),
      password: "admin"
    })

  }

}
