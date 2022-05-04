import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // We define a instance of FormGroup class and inside that, we'll define our controls using FormControl class.

  courseForm!:FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.initForm();
  }


  // these are form controls.
  private initForm() {
    this.courseForm = new FormGroup({
      'courseName': new FormControl(null, Validators.required),// these are the controlling inputs we are giving to the form.
      'courseDesc': new FormControl(null),
      'courseAmount': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.courseForm);
  }
}
