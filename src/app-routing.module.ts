import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './app/herois/herois/herois.component';
import { NovelsComponent } from './app/herois/novels/novels.component';
import { SeriesComponent } from './app/herois/series/series.component';
import { PersonagemComponent } from './app/herois/personagem/personagem.component';
import { SerieComponent } from './app/herois/serie/serie.component';
import { NovelComponent } from './app/herois/novel/novel.component';
import { ResultadosBuscaComponent } from './app/busca/resultados-busca/resultados-busca.component';

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
    path: 'personagem/:id',
    component: PersonagemComponent
  },
  {
    path: 'serie/:id',
    component: SerieComponent
  },
  {
    path: 'novel/:id',
    component: NovelComponent
  },
  {
    path: 'pesquisa',
    component: ResultadosBuscaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
