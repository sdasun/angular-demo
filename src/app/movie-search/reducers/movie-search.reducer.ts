import { createReducer, on } from '@ngrx/store';

import { SearchActions } from '../actions';
import { MovieDetailsResponse, MovieSearchResult, SearchResultItem } from '../models';

export const searchQueryFeatureKey = 'searchQuery';

export interface State {
    search: {
        loaded: boolean;
        loading: boolean;
        query: string;
        reponse?: SearchResultItem[];
        error?: any;
    },
    selectedItem: {
        loaded: boolean;
        loading: boolean;
        id?: string;
        reponse?: MovieDetailsResponse;
        error?: any;
    }
}

const initialState: State = {
    search: {
        loaded: false,
        loading: false,
        query: ''
    },
    selectedItem: {
        loaded: false,
        loading: false,
    },
};

export const reducer = createReducer(
    initialState,
    on(SearchActions.searchQuery, (state, action) => ({
        ...state,
        search: {
        ...state.search,
            loaded: false,
            loading: true,
            reponse: undefined,
            query: action.query
        }
    })),
    on(SearchActions.searchQuerySuccess, (state, action) => ({
        search: {
            ...state.search,
            loaded: true,
            loading: false,
            error: undefined,
            reponse: action.result,
        },
        selectedItem: {
            loaded: false,
            loading: false,
        }
    })),
    on(SearchActions.searchQueryFailure, (state, action) => ({
        ...state,
        search: {
            ...state.search,
            loaded: false,
            loading: false,
            error: action.error,
        }
    })),
    on(SearchActions.selectAMovie, (state, action) => ({
        ...state,
        selectedItem: {
            ...state.selectedItem,
            loaded: false,
            loading: true,
            reponse: undefined,
            id: action.id
        }
    })),
    on(SearchActions.selectAMovieSuccess, (state, action) => ({
        ...state,
        selectedItem: {
            ...state.selectedItem,
            loaded: true,
            loading: false,
            reponse: action.result,
            error: undefined
        }
    })),
    on(SearchActions.selectAMovieFailure, (state, action) => ({
        ...state,
        selectedItem: {
            ...state.selectedItem,
            loaded: false,
            loading: false,
            reponse: undefined,
            error: action.error,
        }
    })),
);

export const getIsSearchLoaded = (state: State) => state.search.loaded;

export const getIsSearchLoading = (state: State) => state.search.loading;

export const getSearchResult = (state: State) => {
    const searchResult = state.search.reponse ?? [];
    if (searchResult === undefined || searchResult === null) {
        return [];
    }
    return searchResult;
};

export const getIsSearchFoundNoResult = (state: State) => {
    const searchResult = state.search.reponse;
    if (searchResult === undefined || searchResult === null) {
        return true;
    }
    return searchResult.length === 0;
};

export const getSearchError = (state: State) => {
    return state.search.error;
};

export const getIsSelectedItemLoaded = (state: State) => state.selectedItem.loaded;

export const getIsSelectedItemLoading = (state: State) => state.selectedItem.loading;

export const getSelectedItem = (state: State) => {
    return state.selectedItem.reponse === null ? undefined : state.selectedItem.reponse;
};

