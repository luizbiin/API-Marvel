import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  public async getFilter(name:any) {
    await this.filterService.filterMarvel(name.filter).subscribe((res) => {
    },
    (error)=>{
      alert(error.error.message)
    }
    )
  }

}
