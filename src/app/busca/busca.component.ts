import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../api/marvel.service';
import { Router } from '@angular/router';
import { Character, Comic, Series } from '../interfaces/interfaces.component';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit{
  constructor(private marvelService: MarvelService, private http: Router){}

  ngOnInit(): void {
      
  }
}