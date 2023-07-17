import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MarvelService } from 'src/app/api/marvel.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit{
  personagemDados: any = [];
  personagem: any = [];
  personagemComics: any = [];
  personagemComicsDetalhes: any = [];
  personagemVariacoes: any = [];
  
  constructor(private marvelService: MarvelService, private http: HttpClient){}

  ngOnInit(): void {
    this.personagem = this.marvelService.personagemSelecionado;

    this.getCharacter().pipe(take(1)).subscribe({
      next: (response: any) => {
        this.personagemDados = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    })

    this.getCharacterComics().pipe(take(1)).subscribe({
      next: (response: any) => {
        this.personagemComics = response.data.results;
        console.log(this.personagemComics);
      },
      error: (error: any) => {
        console.error(error);
      }
    });

    // this.getCharacterComicsDetalhes().pipe(take(1)).subscribe({
    //   next: (response: any) => {
    //     this.personagemComicsDetalhes = response.data.results;
    //     console.log(this.personagemComicsDetalhes);
    //   },
    //   error: (error: any) => {
    //     console.error(error);
    //   }
    // });

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

  getCharacter(){
    const url:string = `${this.marvelService.baseUrl}/characters/${this.personagem.id}?ts=${this.marvelService.timeStemp}&apikey=${this.marvelService.publicKey}&hash=${this.marvelService.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }

  descricaoHeroi(heroi: any){
    if(heroi.description === ""){
      heroi.description = "Description is unndefined"
    }
  }

  getCharacterComics(){
    const url:string = `${this.marvelService.baseUrl}/characters/${this.personagem.id}/comics?ts=${this.marvelService.timeStemp}&apikey=${this.marvelService.publicKey}&hash=${this.marvelService.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }

  getCharacterComicsDetalhes(){
    const url:string = `${this.marvelService.baseUrl}/comics/${this.personagemComics.id}/images?ts=${this.marvelService.timeStemp}&apikey=${this.marvelService.publicKey}&hash=${this.marvelService.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }
//pensar em um nome melhor pra funcao
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

}
