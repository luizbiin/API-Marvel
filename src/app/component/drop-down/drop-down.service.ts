import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private http: HttpClient) { }
  private env = environment;

  public getNames(offSet:any):Observable<any>{  
    console.log('aaa',offSet)
    return this.http.get(`${this.env.API.baseURL}&limit=20&offset=${offSet}`
    )
  }
}