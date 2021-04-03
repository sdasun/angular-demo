import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieHomePageComponent } from './containers';
import { SearchResultPageComponent } from './containers/';

const routes: Routes = [
  {
    path: '',
    component: MovieHomePageComponent,
  },
  {
    path: 'query/:query',
    component: SearchResultPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieSearchRoutingModule {}
