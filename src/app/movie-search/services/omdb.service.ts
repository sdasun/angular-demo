import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieDetailsResponse, MovieSearchResult, OMDBErrorRespone } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OMDBService {
  baseUrl = environment.BASE_URL;
  apiKey = environment.OMDB_API_KEY;
  constructor(protected http: HttpClient) {
  }

  searchByTitle(query: string) {
    query = encodeURIComponent(query);
    const url = this.baseUrl + `/?s=${query}&apikey=${this.apiKey}`;
    return this.http.get<MovieSearchResult | OMDBErrorRespone>(url);
  }

  getMovieDetailsByImdbId(imdbID: string) {
    imdbID = encodeURIComponent(imdbID);
    const url = this.baseUrl + `/?i=${imdbID}&apikey=${this.apiKey}`;
    return this.http.get<MovieDetailsResponse | OMDBErrorRespone>(url);
  }
}
