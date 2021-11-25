import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../domain/user';

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
  });

  constructor(
    //VA IN ERRORE PER L'INTERFACCIA NEL COSTRUTTORE (DA FARE INJECTION)
    //private user: User, 
  ) { }

  signUpFormSubmit(): void {
    /*
        this.user.name = this.signupForm.get('name')?.value;
        this.user.surname = this.signupForm.get('surname')?.value;
        this.user.email = this.signupForm.get('email')?.value;
        this.user.birthdate = this.signupForm.get('birthdate')?.value;
    
        localStorage.setItem(this.user.email, JSON.stringify(this.user))
        */

    let name = this.signupForm.get('name')?.value;
    let surname = this.signupForm.get('surname')?.value;
    let email = this.signupForm.get('email')?.value;
    let birthdate = this.signupForm.get('birthdate')?.value;

    localStorage.setItem(email, JSON.stringify({ name, surname, email, birthdate }));

    console.log("Visualizza solo adnan2594@gmail.com", localStorage.getItem("adnan2594@gmail.com"))


  }

  ngOnInit(): void {
  }

}
