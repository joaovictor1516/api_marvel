import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit{
  heros: any[] = [];

  constructor(private marvelService: MarvelService){}

  ngOnInit(){
    this.marvelService.getCharacters().pipe(take(1)).subscribe({
      next: (response: any) => {
        this.heros = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
}
