import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() nameCards: string = ''
  @Input() numberComics: string = '';
  @Input() numberSeries: string = '';
  @Input() imgCards: string = '';
  @Input() extension: string = '';
  @Input() idCards: string = '';

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }

  public async selectCharacters(card: string){
    await this.cardsService.getCharacters(card).subscribe((res) => {
    },
    (error)=>{
      alert(error.error.message)
    }
    )
  }

}
