import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // It is taking the reference from the template
  @ViewChild('f') courseForm!: NgForm;

  onSubmit(form: NgForm) {
    console.log("Couse Name is: " + form.value.courseName);
    console.log("Couse Description is: " + form.value.courseDesc);
    console.log("Couse Amount is: " + form.value.courseAmount);
  }
  
  onClear() {
    this.courseForm.reset();
  }

  onDelete() {

  }

  onDestroy() {

  }
}
