import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../domain/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
  ) { }

  signUpFormSubmit(): void {

    /*    
        this.user.name = this.signupForm.get('name')?.value;
        this.user.surname = this.signupForm.get('surname')?.value;
        this.user.email = this.signupForm.get('email')?.value;
        this.user.birthdate = this.signupForm.get('birthdate')?.value;
        
        this.userService.addUser(this.user)
    */

    let name = this.signupForm.get('name')?.value;
    let surname = this.signupForm.get('surname')?.value;
    let email = this.signupForm.get('email')?.value;
    let birthdate = this.signupForm.get('birthdate')?.value;
    let password = this.signupForm.get('password')?.value;

    this.userService.addUser({ name, surname, email, birthdate, password })

  }

  ngOnInit(): void {
  }

}
