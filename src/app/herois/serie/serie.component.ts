import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MarvelService } from 'src/app/api/marvel.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie: any = [];

  constructor(private marvelService: MarvelService, private http: HttpClient){}

  ngOnInit(): void {
      this.serie = this.marvelService.serieSelecionada;
      this.getCharacter().pipe(take(1)).subscribe({
        next: (response: any) => {
          this.serie = response.data.results;
          console.log(this.serie);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }

  getCharacter(){
    const url:string = `${this.marvelService.baseUrl}/series/${this.serie.id}?ts=${this.marvelService.timeStemp}&apikey=${this.marvelService.publicKey}&hash=${this.marvelService.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }
}
