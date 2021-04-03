import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieDetailsResponse, SearchResultItem } from '../../models';
import * as fromSearch from 'src/app/movie-search/selector/movie-search.selector';
import { SearchActions } from '../../actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() item?: MovieDetailsResponse;
  constructor(private store$: Store<fromSearch.State>) { }

  ngOnInit(): void {
  }

  onDetails(selectedItem: SearchResultItem) {
    this.store$.dispatch(SearchActions.selectAMovie({ id: selectedItem.imdbID }));
  }

}
