import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit{
  seriesHerois: any[] = [];

  constructor(private MarvelService: MarvelService){}

  ngOnInit(): void {
      this.MarvelService.getSeries().pipe(take(1)).subscribe({
        next: (response: any) => {
          this.seriesHerois = response.data.results;
          console.log(this.seriesHerois);
        }, 
        error: (error: any) => {
          console.error(error);
        }
      })
  }

  mostraDetalhes(series: any){
    series.detalhes = true;
    this.seriesHerois.forEach((element: any) => {
      console.log(element);
      if(element.comics.items.length >= 1){
        element.quadrinho = true;
      } else{
        element.quadrinho = false;
      }
    })
  }

  escondeDetalhes(){
    this.seriesHerois.forEach((element: any) => {
      element.detalhes = false;
    })
  }
}
