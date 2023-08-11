import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import * as CryptoJS from 'crypto-js';
import { Character, Series, Comic } from '../interfaces/interfaces.component';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {
  constructor(private http:HttpClient) {}
  
  privateKey: string = "b570d67d539a3e9943771eb40333e5b45537f077";
  publicKey: string = "a7836e9b654b6019527d0921a05fb2dd";
  baseUrl:string = "https://gateway.marvel.com/v1/public";
  timeStemp:string = new Date().getTime().toString();
  hash:string = CryptoJS.MD5(this.timeStemp + this.privateKey + this.publicKey).toString();
  extensao:string = `?ts=${this.timeStemp}&apikey=${this.publicKey}&hash=${this.hash}`;
  extensaoSearch:string = `&ts=${this.timeStemp}&apikey=${this.publicKey}&hash=${this.hash}`;
  personagemSelecionado:Character = {} as Character;
  serieSelecionada:Series = {} as Series;
  comicSelecionada:Comic = {} as Comic;
  
  getCharacters(){
    const url:string = `${this.baseUrl}/characters${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getSearchCharacters(hero: string){
    const url:string = `${this.baseUrl}/characters?nameStartsWith=${hero}${this.extensaoSearch}`;

    const headers = new HttpHeaders().set("Content-Type", "aplication/json");

    return this.http.get(url, { headers });
  }

  getCharactersId(id: number){
    const url:string = `${this.baseUrl}/characters/${id}${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  } 

  getCharactersIdNovels(id: number){
    const url:string = `${this.baseUrl}/characters/${id}/comics${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getCharactersIdSeries(id: number){
    const url:string = `${this.baseUrl}/characters/${id}/series${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getCharactersIdStories(id: number){
    const url:string = `${this.baseUrl}/characters/${id}/stories${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getNovels(){
    const url:string = `${this.baseUrl}/comics${this.extensao}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getSearchNovels(novel: string){
    const url:string = `${this.baseUrl}/comics?titleStartsWith=${novel}${this.extensaoSearch}`;

    const headers = new HttpHeaders().set("Content-Type", "aplication/json");

    return this.http.get(url, { headers });
  }

  getNovelsId(id: number){
    const url:string = `${this.baseUrl}/comics/${id}${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getNovelsIdCharacters(id: number){
    const url:string = `${this.baseUrl}/comics/${id}/characters${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getNovelsIdSeries(id: number){
    const url:string = `${this.baseUrl}/comics/${id}/series${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getSeries(){
    const url: string = `${this.baseUrl}/series${this.extensao}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }

  getSearchSeries(serie: string){
    const url:string = `${this.baseUrl}/characters?titleStartsWith=${serie}${this.extensaoSearch}`;

    const headers = new HttpHeaders().set("Content-Type", "aplication/json");

    return this.http.get(url, { headers });
  }

  getSeriesId(id: number){
    const url:string = `${this.baseUrl}/series/${id}${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getSeriesIdCharacters(id: number){
    const url:string = `${this.baseUrl}/series/${id}/characters${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getSeriesIdComics(id: number){
    const url:string = `${this.baseUrl}/series/${id}/comics${this.extensao}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

}
