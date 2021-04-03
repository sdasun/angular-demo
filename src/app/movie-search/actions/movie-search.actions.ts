import { createAction, props } from '@ngrx/store';
import { MovieDetailsResponse, MovieSearchResult, OMDBErrorRespone, SearchResultItem } from '../models';

export const searchQuerySuccess = createAction(
    '[OMDB API] Search Query Success',
    props<{ result: SearchResultItem[] }>()
);

export const searchQueryFailure = createAction(
    '[OMDB API] Search Query Failure',
    props<{ error: OMDBErrorRespone | any }>()
);

export const searchQuery = createAction(
    '[OMDB API] Search Movies',
    props<{ query: string }>()
);

export const selectAMovieSuccess = createAction(
    '[OMDB API] Select A Movie Success',
    props<{ result: MovieDetailsResponse }>()
);

export const selectAMovieFailure = createAction(
    '[OMDB API] Select A Movie Failure',
    props<{ error: OMDBErrorRespone | any }>()
);

export const selectAMovie = createAction(
    '[OMDB API] Select A Movie',
    props<{ id: string }>()
);
