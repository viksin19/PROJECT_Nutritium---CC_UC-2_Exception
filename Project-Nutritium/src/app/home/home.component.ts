import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isExpanded : boolean = false;
  public isLoginExpanded : boolean = false;
  public isRegistraionExpanded : boolean = false;

  loginForm: FormGroup;
  registerForm : FormGroup;
  constructor(private route:Router) {
    this.loginForm = new FormGroup({
      loginEmail: new FormControl('', [Validators.required, Validators.email,]),
      loginPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.registerForm = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      registerEmail: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      registerPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
   }

  ngOnInit(): void {

    if(sessionStorage.getItem('isLogin'))  this.route.navigate(['dashboard']);
  }

  login() {
    console.log('Inside login')
    let email = this.loginForm.value.loginEmail;
    let password = this.loginForm.value.loginPassword;
    console.log(email);
    console.log(password);
  }
  register(){
    console.log(this.registerForm);
  }
  resetForm(){
    this.loginForm = new FormGroup({
      loginEmail: new FormControl('', [Validators.required, Validators.email,]),
      loginPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  
  openCollapse(value){

    if(!this.isExpanded) document.getElementById('toggleRegister').click(); 
      this.isExpanded = true;
    
    switch(value){
      case 'login':
        this.isRegistraionExpanded = false;
        this.isLoginExpanded = true;
      break;
      case 'register':
        this.isLoginExpanded = false;
        this.isRegistraionExpanded = true;
      break;
    }

  }
  public close(){
    document.getElementById('toggleRegister').click(); 
      this.isExpanded = false;
  }
}
