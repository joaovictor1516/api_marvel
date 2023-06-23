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

  getCharacters(){
    const baseUrl:string = "https://gateway.marvel.com/v1/public/";
    const timeStemp:string = new Date().getTime().toString();

    const hash:string = CryptoJS.MD5(timeStemp + this.privateKey + this.publicKey).toString();

    const url:string = `${baseUrl}/characters?ts=${timeStemp}&apikey=${this.publicKey}&hash=${hash}`;
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(url, { headers });
  }
}
