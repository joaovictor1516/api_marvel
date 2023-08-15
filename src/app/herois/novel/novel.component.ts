import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service'; 
import { take } from 'rxjs';
import { Comic, Character } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})

export class NovelComponent implements OnInit{
  comic: Comic = {} as Comic;
  novel: string = "";
  comicDados: Comic[] = [];
  comicHerois: Character[] = [];

  constructor(private marvelService: MarvelService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.comic.id = Number(this.route.snapshot.paramMap.get('id'));

      this.marvelService.getNovelsId(this.comic.id).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.comicDados = response.data.results;
          console.log(this.comicDados)
        },
        error: (error: any) => {
          console.error(error);
        }
      })

      this.marvelService.getNovelsIdCharacters(this.comic.id).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.comicHerois = response.data.results;
        },
        error: (error: any) => {
          console.error(error);
        }
      })
  }

  maisDetalhesPersonagem(personagem: Character){
    this.marvelService.personagemSelecionado = personagem;
    this.router.navigate(["/personagem", personagem.id]);
  }

  checaPersonagens(comic: Comic){
    if(comic.characters.items.length > 0){
      comic.temHerois = true;
    } else{
      comic.temHerois = false;
    }
  }

  pesquisarNovel(novel: string){
    this.marvelService.getSearchNovels(novel).pipe(take(1)).subscribe({
      next: (response: any) => {
        this.comic = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
}
