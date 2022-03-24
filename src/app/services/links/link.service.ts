import { Injectable } from '@angular/core';
import axios from 'axios'

const api = axios.create({
  baseURL:"https://sysoxtest.herokuapp.com/api/links"
})
@Injectable({
  providedIn: 'root'
})
export class LinkService {

constructor() { }
 async getLinks() {
    return await api.get('').then((res) => {
      return res.data;
    }).catch((err) => {
      console.log(err);
    })
 }
   async addLink(link: any) {
    return await api.post('/', link).then(
        () => {
          return true;
        })
      .catch(() => {
        return false;
      })
  }
  async deleteLink(link: any) {

    return await api.delete('', {
      data: link
    }).then(
      () => {
        return true;
      }).catch(
      () => {
        return false;
      }
    )
  }
}
