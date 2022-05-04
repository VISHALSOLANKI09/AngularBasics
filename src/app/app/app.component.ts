import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

      constructor() {
        console.log("Component is constrcuted.");
      }

      private callme(): void {
        console.log("Call me! I'm a function.");
      }

      ngOnInit(): void {
        console.log("Component is intialized.");
        this.callme();
      }

}
