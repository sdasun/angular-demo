import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from 'src/app/reducers/';
import { SearchActions } from '../../actions';
import * as fromSearch from '../../selector/movie-search.selector';

@Component({
  selector: 'app-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.scss']
})
export class MovieHomePageComponent {
}
