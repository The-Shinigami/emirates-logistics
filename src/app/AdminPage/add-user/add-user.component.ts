import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  message = "";
  constructor(private userService: UserServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    if (await this.userService.addUser(this.userForm.value)) { 
      this.message = "User added with success";
       setTimeout(() => {
         this.message = "";
         this.router.navigate(["users"]);
       }, 1500);
      this.userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
   }
  }

}
