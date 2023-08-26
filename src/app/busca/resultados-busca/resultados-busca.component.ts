import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { MarvelService } from 'src/app/api/marvel.service';
import { Comic, Character, Series } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.css']
})
export class ResultadosBuscaComponent implements OnInit{
  busca: string = "";
  pesquisaComics: Comic[] = [];
  pesquisaCharacter: Character[] = [];
  pesquisaSerie: Series[] = [];

  constructor(private marvelService: MarvelService, private http: Router, private route: ActivatedRoute){
    this.route.queryParams.subscribe((params) => {
      this.busca = params['query'];
    });
  }

  ngOnInit(): void {
      this.pesquisar(this.busca);
  }

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

  mostraDetalhes(item: Character | Comic | Series){
    item.detalhes = true;
    if(item.description === ""){
      item.description = "Description is unndefined";
    }
  }

  escondeDetalhes(item: Character | Comic | Series){
    item.detalhes = false;
  }

  maisDetalhesPersonagem(heroi: Character){
    this.marvelService.setPersonagemSelecionado(heroi);
    this.http.navigate(['/personagem', heroi.id]);
  }

  maisDetalhesComics(comic: Comic){
    this.marvelService.setComicSelecionada(comic);
    this.http.navigate(['/novel', comic.id]);
  }

  maisDetalhesSeries(serie: Series){
    this.marvelService.setSerieSelecionada(serie);
    this.http.navigate(['/serie', serie.id]);
  }
}