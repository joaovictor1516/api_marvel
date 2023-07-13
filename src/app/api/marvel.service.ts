import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import * as CryptoJS from 'crypto-js';

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
  personagemSelecionado: any

  getCharacters(){
    const url:string = `${this.baseUrl}/characters?ts=${this.timeStemp}&apikey=${this.publicKey}&hash=${this.hash}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getNovels(){
    const url:string = `${this.baseUrl}/comics?ts=${this.timeStemp}&apikey=${this.publicKey}&hash=${this.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }

  getSeries(){
    const url: string = `${this.baseUrl}/series?ts=${this.timeStemp}&apikey=${this.publicKey}&hash=${this.hash}`;

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url,{ headers });
  }
}
