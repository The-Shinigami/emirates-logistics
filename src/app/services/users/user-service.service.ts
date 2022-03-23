import {
  Injectable
} from '@angular/core';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4600/users',
});
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private user: any;
  private authenticated = false;
  constructor() {
    this.isAuthenticated();
  }

  async auth(user: any) {
    return await api.post('/auth', user).then(
      (response) => {
        if (response.data) {
          this.authenticated = true;
          localStorage.setItem('is', this.authenticated + '');
        }
        return response.data;
      })
  }

  async getUsers() {
    return await api.get('').then(
      (response) => {
        return response.data;
      })
  }
  async addUser(user: any) {
    return await api.post('', user).then(
        () => {
          return true;
        })
      .catch(() => {
        return false;
      })
  }
  async deleteUser(user: any) {

    return await api.delete('', {
      data: user
    }).then(
      () => {
        return true;
      }).catch(
      () => {
        return false;
      }
    )
  }
  isAuthenticated() {
    if (localStorage.getItem('is') != null) {
      if (localStorage.getItem('is') == "true") {
        return true;
      } else {
        return false;
      }
    }
    return this.authenticated;
  }
  logOut() {
    localStorage.removeItem('is');
    this.authenticated = false;
  }

}