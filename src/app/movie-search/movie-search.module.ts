import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieHomePageComponent } from './containers/';
import { MovieSearchRoutingModule } from './movie-search-routing.module';
import { SearchResultItemComponent } from './components';
import { SearchResultPageComponent } from './containers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSearch from './selector/movie-search.selector';
import { SearchEffects } from './effects/movie-search.effect';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const COMPONENTS = [SearchResultItemComponent, MovieDetailComponent];
const CONTAINERS = [MovieHomePageComponent, SearchResultPageComponent];
@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    LazyLoadImageModule,
    SharedModule,
    FormsModule,
    CommonModule,
    MovieSearchRoutingModule,
    StoreModule.forFeature(fromSearch.searchFeatureKey, fromSearch.reducers),
    EffectsModule.forFeature([SearchEffects]),
  ]
})
export class MovieSearchModule { }
