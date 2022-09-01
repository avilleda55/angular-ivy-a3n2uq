import { Component, VERSION } from '@angular/core';
import { Users } from './users.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usuario = {
    name: '',
    email: '',
    role: '',
    password: '',
    age: 0,
  };

  users: Users[] = [
    {
      name: 'Abner Villeda',
      email: 'abnervilleda22@gmail.com',
      role: 'A',
      password: '12345678',
      age: 21,
    },
    {
      name: 'Uziel Villeda',
      email: 'uzielvilleda22@gmail.com',
      role: 'U',
      password: '12345678',
      age: 16,
    },
  ];

  addUser() {
    this.users.push(this.usuario);
    this.usuario = {
      name: '',
      email: '',
      role: '',
      password: '',
      age: 0,
    };
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  updateUser(index: number) {
    this.users[index] = this.usuario;
  }
}
