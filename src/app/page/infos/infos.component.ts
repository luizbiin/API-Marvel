import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfosService } from './infos.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  public getId: any = ''; 
  public dataChap: any; 
  public loader: boolean = true 

  constructor(private activatedRoute: ActivatedRoute, private infosService: InfosService) { 
    this.getId = this.activatedRoute.snapshot.params
    this.getId = this.getId.id
  }  

  ngOnInit(): void {   
    this.selectCharacters()
  }

  public async selectCharacters(){
    await this.infosService.getCharacters(this.getId).subscribe((res) => {
      this.loader = false
      this.dataChap = res.data.results[0]
    },
    (error)=>{
      alert(error.error.message)
    }
    )
  }

}
