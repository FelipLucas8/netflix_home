import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.accessToken}`,
        'Content-Type': 'application/json'
      })
    };
    let params = new HttpParams();
    params = params.append('page', 1);
    return this.http.get(`${environment.urlApi}/movie/changes`, { headers: httpOptions.headers, params })
  }

  getTrendingMovies() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.accessToken}`,
        'Content-Type': 'application/json'
      })
    };
    let params = new HttpParams();
    params = params.append('language', 'pt-BR');
    return this.http.get(`${environment.urlApi}/trending/all/day`, { headers: httpOptions.headers, params })
  }

  getMoviesDetails(movieId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.accessToken}`,
        'Content-Type': 'application/json'
      })
    };
    let params = new HttpParams();
    params = params.append('language', 'pt-BR');
    return this.http.get(`${environment.urlApi}/movie/${movieId}`, { headers: httpOptions.headers, params })
  }

  getMovieVideo(movieId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.accessToken}`,
        'Content-Type': 'application/json'
      })
    };
    let params = new HttpParams();
    params = params.append('language', 'pt-BR');
    return this.http.get(`${environment.urlApi}/movie/${movieId}/videos`, { headers: httpOptions.headers, params }).pipe(
      catchError((error: any) => {
        const data = new Subject<any>();
        if (error.status === 404) {
          data.next(null)
          return data.asObservable()
        }
        data.next(null)
        return data.asObservable()
      })
    );
  }

  getMovieImages(movieId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.accessToken}`,
        'Content-Type': 'application/json'
      })
    };
    let params = new HttpParams();
    params = params.append('language', 'pt');
    return this.http.get(`${environment.urlApi}/movie/${movieId}/images`, { headers: httpOptions.headers, params })
  }
}
