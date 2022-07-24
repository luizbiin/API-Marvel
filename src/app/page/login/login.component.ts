import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public erro: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public validate(data: any){
    if(data.password.toLowerCase() == 'hulk' ){
      this.router.navigate(["home"])
    }else{
      this.erro = true
    }
  }

}
