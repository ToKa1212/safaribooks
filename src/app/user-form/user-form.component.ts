import {Component} from '@angular/core';
import {UserComponent} from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  countries = ['United States', 'Slovakia', 'Germany', 'Denmark'];

  model = new UserComponent('', '', '');

  submitted = false;

  onSubmit(form) {
    this.submitted = true;
    console.log(form);
  }
}
