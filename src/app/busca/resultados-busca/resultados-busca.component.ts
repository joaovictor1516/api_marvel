import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MarvelService } from 'src/app/api/marvel.service';
import { Comic, Character, Series } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.css']
})
export class ResultadosBuscaComponent {
  pesquisaComics: Comic[] = [];
  pesquisaCharacter: Character[] = [];
  pesquisaSerie: Series[] = [];

  constructor(private marvelService: MarvelService, private http: Router){}

  pesquisar(pesquisa: string){
    this.marvelService.getSearchNovels(pesquisa).pipe(take(1)).subscribe({
      next: (response: any) => {
        this.pesquisaComics= response.data.results;
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });

    this.marvelService.getSearchCharacters(pesquisa).pipe(take(1)).subscribe({
      next: (response:any)=>{
        this.pesquisaCharacter = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    });

    this.marvelService.getSearchSeries(pesquisa).pipe(take(1)).subscribe({
      next: (response: any) => {
        this.pesquisaSerie = response.data.results;
      },
      error: (error : any)=>{
        console.error(`Ocorreu o erro: ${error}, na busca das séries`);
      }
    });
  }

}
