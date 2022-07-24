import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceHomeService } from './service-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataCharacters: any
  public countOffSet: number = 0
  public numberPage: number = 1
  public constr: number = 0
  public loader: boolean = true    
  public maxCharacters: number = 0

  constructor(private router: Router, private serviceHomeService: ServiceHomeService) { }

  ngOnInit(): void {
    this.getMarvelCharacters()
  }

  public async getMarvelCharacters(){
    await this.serviceHomeService.getMarvel(this.countOffSet).subscribe((res) => {
      this.dataCharacters = Object.values(res.data.results)
      this.maxCharacters = res.data.total/10
      this.loader = false
    },
    (error)=>{
      alert(error.error.message)
    }
    )
  }

  public page(number:any){
    this.loader = true
    this.numberPage=number
    
    if(this.numberPage == 1){
      this.countOffSet = 0    
    }else{
      this.countOffSet = (number-1)*10
    }    
    
    this.getMarvelCharacters()
  }

  public morePages(){
    this.constr = this.constr + 1
  }

  public lessPages(){
    this.constr = this.constr - 1
  }

  public selectCharacters(idCard: string){
    this.router.navigate(["infos/"+idCard])
  }

}
