import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { SearchActions } from '../../actions';
import * as fromSearch from 'src/app/movie-search/selector/movie-search.selector';
import { MovieDetailsResponse } from '../../models';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})
export class SearchResultPageComponent implements OnInit, OnDestroy {
  searchResult$ = this.store$.pipe(select(fromSearch.selectSearchReult));
  isSearchNotFound$ = this.store$.pipe(select(fromSearch.selectIsSearchFoundNoResult));
  searchError$ = this.store$.pipe(select(fromSearch.selectSearchError));
  isSearchLoading$ = this.store$.pipe(select(fromSearch.selectIsSearchLoading));
  isSearchLoaded$ = this.store$.pipe(select(fromSearch.selectIsSearchLoaded));
  selectedResult$ = this.store$.pipe(select(fromSearch.selectSelectedResult));
  isSelectedLoading$ = this.store$.pipe(select(fromSearch.selectIsSelectedLoading));
  isSelectedLoaded$ = this.store$.pipe(select(fromSearch.selectIsSelectedLoaded));
  selectedItem?: MovieDetailsResponse;
  constructor(private activatedRoute: ActivatedRoute, private store$: Store<fromSearch.State>) { }
  isAlive = true;
  query = '';
  ngOnInit(): void {
    // searchQuery;
    this.activatedRoute.paramMap
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((params) => {
        this.query = params.get('query') ?? '';
        if (this.query !== '') {
          this.store$.dispatch(SearchActions.searchQuery({ query: this.query }));
        }
      });
    
    // I use this subscriber to avoid a bug (Type 'null' is not assignable to type 'MovieDetailsResponse | undefined'.) in angular 11
    this.selectedResult$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(x => this.selectedItem = x);
  }

  ngOnDestroy() {
    this.isAlive = false; // this will unsubscribe from observables on the Destroy
  }

}
