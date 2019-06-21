import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  @ViewChild('userForm') form: any;
  
  data:any;
  constructor(private dataSerive : DataService) { }

  ngOnInit() {
    this.dataSerive.getData().subscribe(data => {
      console.log(data);
    });
 
    this.dataSerive.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

}

onSubmit({value, valid}: {value: User, valid: boolean}) {
  if(!valid){
    console.log('Form is not valid');
  } else {
    value.isActive = true;
    value.registered = new Date();
    value.hide = true;

    this.dataSerive.addUser(value);

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
}

}
