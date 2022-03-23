import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  message = "";
  constructor(private userService: UserServiceService, private router: Router) { }

  async onSubmit() {
    const state = JSON.stringify(await this.userService.auth(this.userForm.value));
   localStorage.setItem("user", state);
    if (state == "true") { 
      this.router.navigate(['users']); 
   }
    else {
      this.message = "Username or Password Incorrect";
      this.userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
      })
      setTimeout(() => {
        this.message = "";
      }, 1500);
    } 
  }
  
  ngOnInit(): void {
  }

}
