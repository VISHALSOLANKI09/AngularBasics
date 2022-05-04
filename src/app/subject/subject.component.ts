import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

      @Input() data: any;

      constructor() { }

      ngOnInit(): void {
      }
}
