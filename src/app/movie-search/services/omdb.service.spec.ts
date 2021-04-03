import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MovieSearchResult } from '../models';

import { OMDBService } from './omdb.service';

describe('OMDBService', () => {
  let service: OMDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OMDBService, HttpClient]
    });
    service = TestBed.inject(OMDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return an Observable<Array<MovieSearchResult>>", (done: DoneFn) => {
    service.searchByTitle('avenger').subscribe(response => {
      const result = (response as MovieSearchResult);
      expect(Array.isArray(result.Search)).toEqual(true);
      expect(result.Search.length).toBeGreaterThan(0);
      expect(typeof (result.Search[0].Title)).toEqual('string');
      done();
    })
  });
});
