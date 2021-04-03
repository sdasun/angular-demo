import {
    createSelector,
    createFeatureSelector,
    combineReducers,
    Action,
} from '@ngrx/store';
import * as fromSearch from '../reducers/movie-search.reducer';
import * as fromRoot from 'src/app/reducers';

export const searchFeatureKey = 'search';

export interface SearchState {
    [fromSearch.searchQueryFeatureKey]: fromSearch.State;
}

export interface State extends fromRoot.State {
    [searchFeatureKey]: SearchState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: SearchState | undefined, action: Action) {
    return combineReducers({
        [fromSearch.searchQueryFeatureKey]: fromSearch.reducer,
    })(state, action);
}

export const selectSearchState = createFeatureSelector<State, SearchState>(
    searchFeatureKey
);


// Search Query;
export const selectSearchQueryState = createSelector(
    selectSearchState,
    (state: SearchState) => state[fromSearch.searchQueryFeatureKey]
);


export const selectIsSearchLoaded = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getIsSearchLoaded(state)
);

export const selectIsSearchLoading = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getIsSearchLoading(state)
);

export const selectSearchReult = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getSearchResult(state)
);

export const selectIsSearchFoundNoResult = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getIsSearchFoundNoResult(state)
);

export const selectSearchError = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getSearchError(state)
);


export const selectIsSelectedLoaded = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getIsSelectedItemLoaded(state)
);

export const selectIsSelectedLoading = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getIsSelectedItemLoading(state)
);

export const selectSelectedResult = createSelector(
    selectSearchQueryState,
    (state) => fromSearch.getSelectedItem(state)
);
