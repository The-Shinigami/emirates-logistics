import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserServiceService
} from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  load = false;
  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    this.users = await this.userService.getUsers();
    this.load = true;
  }
  async delete(user: any) {
    console.log(user);
    if (confirm("are you sure you want de delete the user")) {

      if (await this.userService.deleteUser(user)) {
        this.load = false;
        await this.getUsers();
        this.load = true;
      } else {
        alert('user not deleted');
      }
    }
  }

}