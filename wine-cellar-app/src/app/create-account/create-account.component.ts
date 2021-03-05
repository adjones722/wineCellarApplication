import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(http: HttpClientModule, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      

    });

  }

  createAccount(event){
    event.preventDefault();
    console.log(event);
    
  }

  
  sendToDatabase(username,password){
    
  }




}
