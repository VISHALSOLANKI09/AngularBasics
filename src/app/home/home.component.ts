import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private request: RequestsService) { }

  ngOnInit(){
  }

  public makeRequest() {
    console.log("Making Request");
    this.request.makeRequest("https://fakestoreapi.com/products/")
    .subscribe((res: any)=>{
      console.log(res);
    });
  }

}
