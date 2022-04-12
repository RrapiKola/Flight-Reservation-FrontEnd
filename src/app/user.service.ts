import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/user/"

  constructor(private httpClient : HttpClient) { }


  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,user)
  }

}
