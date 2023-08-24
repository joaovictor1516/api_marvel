import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NavebarComponent } from '../navebar/navebar.component';
import { HeroisComponent } from '../herois/herois/herois.component';
import { NovelsComponent } from '../herois/novels/novels.component';
import { SeriesComponent } from '../herois/series/series.component';
import { PersonagemComponent } from '../herois/personagem/personagem.component';
import { SerieComponent } from '../herois/serie/serie.component';
import { LimiteComponent } from '../limite/limite.component';
import { NovelComponent } from '../herois/novel/novel.component';
import { BuscaComponent } from '../busca/busca.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { ResultadosBuscaComponent } from '../busca/resultados-busca/resultados-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    HeroisComponent,
    NovelsComponent,
    SeriesComponent,
    PersonagemComponent,
    SerieComponent,
    LimiteComponent,
    NovelComponent,
    BuscaComponent,
    RodapeComponent,
    ResultadosBuscaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }