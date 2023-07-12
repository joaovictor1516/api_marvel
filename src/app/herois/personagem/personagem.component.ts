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
  comics: any = [];
  
  constructor(private marvelService: MarvelService, private http: HttpClient){}

  ngOnInit(): void {
    this.personagem = this.marvelService.personagemSelecionado;

    this.getCharacter().pipe(take(1)).subscribe({
      next: (response: any) => {
        this.personagemDados = response.data.results;
        console.log(this.personagemDados);
        console.log(this.personagem);
      },
      error: (error) => {
        console.error(error);
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

}
