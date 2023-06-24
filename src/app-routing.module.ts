import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './app/herois/personagens/herois.component';
import { NovelsComponent } from './app/herois/novels/novels.component';


const routes: Routes = [
{
  path: '',
  component: HeroisComponent
},
{
  path: 'novels',
  component: NovelsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
