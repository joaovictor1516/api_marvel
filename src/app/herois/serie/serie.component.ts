import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MarvelService } from 'src/app/api/marvel.service';
import { Character, Comic, Series } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie: Series = {} as Series;
  serieDados: Series[] = [];
  serieHerois: Character[] = [];
  serieComics: Comic[] = [];
  constructor(private marvelService: MarvelService){}

  ngOnInit(): void {
      this.serie = this.marvelService.serieSelecionada;
      
      this.marvelService.getSeriesId(this.serie.id).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.serieDados = response.data.results;
        },
        error: (error: any) => {
          console.error(error);
        }
      });

      this.marvelService.getSeriesIdCharacters(this.serie.id).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.serieHerois = response.data.results;
          console.log(this.serieHerois);
        },
        error: (error: any) => {
          console.error(error);
        }
      });

      this.marvelService.getSeriesIdComics(this.serie.id).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.serieComics = response.data.results;
          console.log(this.serieComics);
        },
        error: (error: any) => {
          console.error(error);
        }
      })
  }

  conferePersonagens(serie: Series){
    if(serie.characters.items.length > 0){
      serie.temHerois = true;
    } else{
      serie.temHerois = false;
    }
  }

  confereComics(serie: Series){
    if(serie.comics.items.length > 0){
      serie.temComic = true;
    } else{
      serie.temComic = false;
    }
  }
}
