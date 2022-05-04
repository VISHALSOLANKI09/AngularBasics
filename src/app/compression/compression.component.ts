import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compression',
  templateUrl: './compression.component.html',
  styleUrls: ['./compression.component.css']
})
export class CompressionComponent implements OnInit {

      constructor() { }

      ngOnInit(): void {
      }

      data = {
        subject: 'Compression',
        headline: 'What is Compression',
        description: "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals",
        related: [
          "Neural Networks",
          "Machine Learning",
          "Deep Learning"
        ]
      }

}
