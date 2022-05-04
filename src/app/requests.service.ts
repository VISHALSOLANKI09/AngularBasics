import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  public makeRequest(url: any){
    return this.http.get<any>(url)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
}
