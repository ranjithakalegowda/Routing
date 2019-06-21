import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Angular',
        lastName: 'Node',
        email: 'aaa@gmail.com',
        isActive: false,

        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'React',
        lastName: 'Node',
        email: 'bbb@gmail.com',
        isActive: true,

        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'Vue',
        lastName: 'Node',
        email: 'ccc@gmail.com',
        isActive: false,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      }
    ];

  }
  getUsers():Observable<User[]> {
    return of(this.users);
  }
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(1);
      }, 4000);
    });
    return this.data;
  }

  
    addUser(user: User) {
      this.users.unshift(user);
    }
  
}
