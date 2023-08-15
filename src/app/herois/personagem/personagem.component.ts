import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { MarvelService } from 'src/app/api/marvel.service';
import { Character, Comic, Series } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit{
  personagem: Character = {} as Character;
  personagemDados: Character[] = [];
  personagemComics: Comic[] = [];
  personagemVariacoes: Character[] = [];
  personagemSeries: Series[] = [];
  
  constructor(private marvelService: MarvelService, private http: HttpClient, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.personagem.id = Number(this.route.snapshot.paramMap.get('id'));

    this.marvelService.getCharactersId(this.personagem.id).pipe(take(1)).subscribe({
      next: (response: any) => {
        this.personagemDados = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    })

    this.marvelService.getCharactersIdNovels(this.personagem.id).pipe(take(1)).subscribe({
      next: (response: any) => {
        this.personagemComics = response.data.results;
        console.log(this.personagemComics);
      },
      error: (error: any) => {
        console.error(error);
      }
    });

    this.marvelService.getCharactersIdSeries(this.personagem.id).pipe(take(1)).subscribe({
      next: (response: any) => {
        this.personagemSeries = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    })

    this.getHeroByName().pipe(take(1)).subscribe({
      next: (response: any) => {
        this.personagemVariacoes = response.data.results;
        console.log(this.personagemVariacoes);
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

  descricaoHeroi(heroi: Character){
    if(heroi.description === ""){
      heroi.description = "Description is unndefined";
    }
    console.log("Estou funcionando")
  }

  getHeroByName(){
    const posicao = this.personagem.name.indexOf("(");
    if(posicao !== -1){
      this.personagem.name = this.personagem.name.substring(0, posicao);
      console.log(this.personagem.name);
    } else{
      console.log(this.personagem.name);
    }
    const url: string = `${this.marvelService.baseUrl}/characters?nameStartsWith=${this.personagem.name}&ts=${this.marvelService.timeStemp}&apikey=${this.marvelService.publicKey}&hash=${this.marvelService.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }

  mostraDetalhesHeroi(heroi: Character){
    this.marvelService.personagemSelecionado = heroi;
    this.router.navigate(['/personagem']);
  }

  mostraDetalhesNovel(novel: Comic){
    this.marvelService.comicSelecionada = novel;
    this.router.navigate(['/novel']);
  }

  mostraDetalhesSerie(serie: Series){
    this.marvelService.serieSelecionada = serie;
    this.router.navigate(['/serie']);
  }
}
