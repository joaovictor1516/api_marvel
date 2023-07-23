import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service';
import { take } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit{
  novels:any[] = [];

  constructor(private marvelService: MarvelService, private router: Router){}

  ngOnInit(){
    this.marvelService.getNovels().pipe(take(1)).subscribe({
      next: (response: any) =>{
        this.novels = response.data.results;
        console.log(this.novels);
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  mostraDetalhes(novel: any){
    novel.detalhes = true;
    if(novel.characters.items.length > 0){
      novel.temPersonagens = true;
      novel.semPersonagens = false
    } else{
      novel.semPersonagens = true;
      novel.temPersonagens = false;
    }
  }

  escondeDetalhes(){
    this.novels.forEach((novel) => {
      novel.detalhes = false;
    })
  }

  maisDetalhes(novel: any){
    this.marvelService.comicSelecionada = novel;
    this.router.navigate(['/novel']);
  }
}