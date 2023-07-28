import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service'; 
import { take } from 'rxjs';
import { Comic, Character } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})

export class NovelComponent implements OnInit{
  comic: Comic = {} as Comic;
  comicDados: Comic[] = [];
  herois: Character[] = [];

  constructor(private marvelService: MarvelService){}

  ngOnInit(): void {
      this.comic = this.marvelService.comicSelecionada;

      this.marvelService.getNovelsId(this.comic.id).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.comicDados = response.data.results;
        },
        error: (error: any) => {
          console.error(error);
        }
      })

      this.marvelService.getNovelsIdCharacters(this.comic.id).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.herois = response.data.results;
        },
        error: (error: any) => {
          console.error(error);
        }
      })
  }
}
