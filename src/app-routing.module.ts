import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './app/herois/personagens/herois.component';
import { NovelsComponent } from './app/herois/novels/novels.component';
import { SeriesComponent } from './app/herois/series/series.component';
import { PersonagemComponent } from './app/herois/personagem/personagem.component';


const routes: Routes = [
  {
    path: '',
    component: HeroisComponent
  },
  {
    path: 'novels',
    component: NovelsComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path:'personagem',
    component: PersonagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
