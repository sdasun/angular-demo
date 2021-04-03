import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchResultItem } from '../../models';
import * as fromSearch from 'src/app/movie-search/selector/movie-search.selector';
import { SearchActions } from '../../actions';
@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
  @Input() item!: SearchResultItem;
  constructor(private store$: Store<fromSearch.State>) { }

  ngOnInit(): void {
  }

  onDetails(selectedItem: SearchResultItem) {
    this.store$.dispatch(SearchActions.selectAMovie({ id: selectedItem.imdbID }));
    const scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    });
  }
}
