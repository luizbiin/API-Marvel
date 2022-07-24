import { Component, OnInit } from '@angular/core';
import { DropDownService } from './drop-down.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  constructor(private dropDownService: DropDownService) { }
  public offset: number = 0
  public dataNames: any = [];
  public loader: boolean = true



  ngOnInit(): void {
    this.searchNames()
  }

  public async searchNames(){
    await this.dropDownService.getNames(this.offset).subscribe((res) => {
      this.dataNames.push(Object.values(res.data.results))
      this.loader = false
    },
    (error)=>{
      alert(error.error.message)
    }
    )
  } 

  public getMoreCharacters(){  
    this.loader = true 
    this.offset = this.offset+20
    this.searchNames()
  }

}
