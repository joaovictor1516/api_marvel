import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators'
import { Character } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit{
  heros: Character[] = [];

  constructor(private marvelService: MarvelService, private router: Router){}

  ngOnInit(){
    this.marvelService.getCharacters().pipe(take(1)).subscribe({
      next: (response: any) => {
        this.heros = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  mostraDetalhes(personagem: any){
    personagem.detalhes = true;
    if(personagem.description === ""){
      personagem.description = "Description is unndefined";
    }
  }

  escondeDetalhes(){
    this.heros.forEach((herois) => {
      herois.detalhes = false;
    })
  }

  maisDetalhes(personagem: any){
    this.marvelService.personagemSelecionado = personagem;
    this.router.navigate(['/personagem']);
  }

  pesquisarHeroi(hero: any){
    if(hero !== ""){
      this.marvelService.getSearchCharacters(hero.value).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.heros = response.data.results;
          console.log(hero);
          console.log(this.heros);
        },
        error: (error: any) => {
          console.error(error);
        }
      })
    }
  }
}