import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }
  private env = environment;

  public getCharacters(idCards: any):Observable<any>{  
    return this.http.get(`${this.env.API.baseCharacters}/${idCards}${this.env.API.baseKeys}`
    )
  }
}