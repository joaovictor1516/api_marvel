import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent{
  pesquisa: string = "";
  
  constructor(private router: Router){}

  busca(pesquisa: string){
    this.router.navigate(['/pesquisa'],{ queryParams: {query: pesquisa} });
  }
}