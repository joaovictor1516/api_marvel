import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service'; 
import { take } from 'rxjs';
import { Comic, Character } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})

export class NovelComponent implements OnInit{
  comic: Comic = {} as Comic;
  comicRecebida: Comic = {} as Comic;
  comicDados: Comic[] = [];
  comicHerois: Character[] = [];
  comicVariacoes: Comic[] = [];

  constructor(private marvelService: MarvelService, private router: Router, private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
      this.comic.id = Number(this.route.snapshot.paramMap.get('id'));
      this.comicRecebida = this.marvelService.getComicSelecionada();

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

      this.getNovelsByName(this.comicRecebida).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.comicVariacoes = response.data.results;
          console.log(this.comicVariacoes);
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

  getNovelsByName(comic: Comic){
    const posicao = comic.title.indexOf("(");
    if(posicao !== -1){
      comic.title = comic.title.substring(0, posicao);
    } else{
      console.log(comic.title);
    }
    const url: string = `${this.marvelService.baseUrl}/comics?titleStartsWith=${comic.title}${this.marvelService.extensaoSearch}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }
}