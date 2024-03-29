import { Component, OnInit} from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Series } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})

export class SeriesComponent implements OnInit{
  seriesHerois: Series[] = [];

  constructor(private marvelService: MarvelService, private router: Router){}

  ngOnInit(): void {
      this.marvelService.getSeries().pipe(take(1)).subscribe({
        next: (response: any) => {
          this.seriesHerois = response.data.results;
          console.log(this.seriesHerois);
        }, 
        error: (error: any) => {
          console.error(error);
        }
      })
  }

  mostraDetalhes(series: Series){
    series.detalhes = true;
  }

  escondeDetalhes(series: Series){
    series.detalhes = false;
  }

  maisDetalhes(serie: Series){
    this.marvelService.serieSelecionada = serie;
    this.router.navigate([`/serie`, serie.id]);
  }
}