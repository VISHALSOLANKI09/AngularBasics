import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptography',
  templateUrl: './cryptography.component.html',
  styleUrls: ['./cryptography.component.css']
})
export class CryptographyComponent implements OnInit {

      constructor() { }

      ngOnInit(): void {
      }

      data = {
        subject: 'Cryptography',
        headline: 'What is Cryptography',
        description: "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals",
        related: [
          "Neural Networks",
          "Machine Learning",
          "Deep Learning"
        ]
      }

}
