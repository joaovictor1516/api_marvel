import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/api/marvel.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit{
  novels:any[] = [];

  constructor(private marvelService: MarvelService){}

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

}