import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service';
import { take } from 'rxjs/operators'
import { Router } from '@angular/router';
import { Comic } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit{
  novels:Comic[] = [];

  constructor(private marvelService: MarvelService, private router: Router){}

  ngOnInit(){
    this.marvelService.getNovels().pipe(take(1)).subscribe({
      next: (response: any) =>{
        this.novels = response.data.results;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  mostraDetalhes(novel: Comic){
    novel.detalhes = true;
    if(novel.characters.items.length > 0){
      novel.temHerois = true;
    } else{
      novel.temHerois = false;
    }
  }

  escondeDetalhes(novel: Comic){
      novel.detalhes = false;
  }

  maisDetalhes(novel: Comic){
    this.marvelService.setComicSelecionada(novel);
    this.router.navigate(['/novel', novel.id]);
  }
}