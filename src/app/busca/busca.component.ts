import { Component} from '@angular/core';
import { MarvelService } from '../api/marvel.service';
import { Router } from '@angular/router';
import { Character, Comic, Series } from '../interfaces/interfaces.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent{
  pesquisa: string = "";
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