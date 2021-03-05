import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get('${this.uri}/users');
  }//end getUsers

  postUser(username, password){
    const user = {
      username: username,
      password: password
    };
    return this.http.post('${this.uri}/users/add',user);
  }//end postUser
  
}//end class
