import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarvelService } from 'src/app/api/marvel.service'; 
import { take } from 'rxjs';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})
export class NovelComponent implements OnInit{
  comic: any = [];
  comicDados: any = []

  constructor(private marvelService: MarvelService, private http: HttpClient){}

  ngOnInit(): void {
      this.comic = this.marvelService.comicSelecionada;

      this.getComic().pipe(take(1)).subscribe({
        next: (response: any) => {
          this.comicDados = response.data.results
          console.log(this.comicDados);
        },
        error: (error: any) => {
          console.error(error);
        }
      })
  }

  getComic(){
    const url:string = `${this.marvelService.baseUrl}/comics/${this.comic.id}?ts=${this.marvelService.timeStemp}&apikey=${this.marvelService.publicKey}&hash=${this.marvelService.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }
}
