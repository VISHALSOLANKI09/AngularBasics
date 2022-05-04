import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

      constructor() { }

      ngOnInit(): void {
      }

      public userData = {
        email: "",
        password: ""
      }

      public createUser(): void {
        console.log("Create User");
        console.log("Email: ", this.userData.email);
        console.log("Password: ", this.userData.password);
      }      

}
