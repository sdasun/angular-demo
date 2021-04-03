// import {
//     createSelector,
//     createFeatureSelector,
//     combineReducers,
//     Action,
// } from '@ngrx/store';
// import * as fromSearch from './movie-search.reducer';
// import * as fromRoot from 'src/app/reducers';

// export const searchFeatureKey = 'search';

// export interface SearchState {
//     [fromSearch.searchQueryFeatureKey]: fromSearch.State;
// }

// export interface State extends fromRoot.State {
//     [searchFeatureKey]: SearchState;
// }

// /** Provide reducer in AoT-compilation happy way */
// export function reducers(state: SearchState | undefined, action: Action) {
//     return combineReducers({
//         [fromSearch.searchQueryFeatureKey]: fromSearch.reducer,
//     })(state, action);
// }
