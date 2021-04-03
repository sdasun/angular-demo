import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { SearchActions } from 'src/app/movie-search/actions';
import * as fromSearch from 'src/app/movie-search/selector/movie-search.selector';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search$ = this.store$.pipe(select(fromSearch.selectSearchQueryState));
  constructor(private store$: Store<fromSearch.State>, private router: Router) { }
  query = '';
  ngOnInit(): void {
  }

  onSearch(): void {
    const query = encodeURIComponent(this.query);
    this.router.navigateByUrl(`search/query/${query}`);
  }

}
