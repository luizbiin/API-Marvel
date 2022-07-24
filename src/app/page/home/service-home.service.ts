import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {

  constructor(private http: HttpClient) { }
  private env = environment;

  public getMarvel(offSet:any):Observable<any>{   
    return this.http.get(`${this.env.API.baseURL}&limit=10&offset=${offSet}`
    )
  }
}