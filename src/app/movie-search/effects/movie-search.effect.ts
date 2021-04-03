import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { SearchActions } from '../actions';
import { MovieDetailsResponse, MovieSearchResult, OMDBErrorRespone } from '../models';
import { OMDBService } from '../services/omdb.service';


@Injectable()
export class SearchEffects {

    constructor(
        private actions$: Actions, private omdbService: OMDBService) { }


    searchQuery$ = createEffect((): any =>
        this.actions$.pipe(
            ofType(SearchActions.searchQuery),
            exhaustMap((action) =>
                this.omdbService.searchByTitle(action.query).pipe(
                    map(data => {
                        if ((<MovieSearchResult>data).Response === 'True') {
                            return SearchActions.searchQuerySuccess({ result: (<MovieSearchResult>data).Search });
                        } else {
                            return SearchActions.searchQueryFailure({ error: data });
                        }
                    }
                    ),
                    catchError(error => {
                        return of(SearchActions.searchQueryFailure({ error }));
                    }
                    )
                )
            )
        )
    );

    selectAMovie$ = createEffect((): any =>
        this.actions$.pipe(
            ofType(SearchActions.selectAMovie),
            exhaustMap((action) =>
                this.omdbService.getMovieDetailsByImdbId(action.id).pipe(
                    map(data => {
                        if ((<MovieDetailsResponse>data).Response === 'True') {
                            return SearchActions.selectAMovieSuccess({ result: (<MovieDetailsResponse>data) });
                        } else {
                            return SearchActions.selectAMovieFailure({ error: data });
                        }
                    }
                    ),
                    catchError(error => {
                        return of(SearchActions.selectAMovieFailure({ error }));
                    })
                )
            )
        )
    );
}