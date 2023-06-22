import { Injectable } from '@angular/core';
import { GeneralApiService } from './general-api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private generalApiService: GeneralApiService) { }

  getAllMovies(){
    const data = new Subject<any>();
    this.generalApiService.getAllMovies().subscribe((res: any) => {
      data.next(res)
    }, (err: any) => {
      // console.log(err)
    })

    return data.asObservable()
  }

  getTrendingMovies(){
    const data = new Subject<any>();
    this.generalApiService.getTrendingMovies().subscribe((res: any) => {
      data.next(res)
    }, (err: any) => {
      // console.log(err)
    })

    return data.asObservable()
  }

  getMoviesDetails(movieId: number){
    const data = new Subject<any>();
    this.generalApiService.getMoviesDetails(movieId).subscribe((res: any) => {
      data.next(res)
    }, (err: any) => {
      // console.log(err)
    })

    return data.asObservable()
  }

  getMovieVideo(movieId: number){
    const data = new Subject<any>();
    this.generalApiService.getMovieVideo(movieId).subscribe((res: any) => {
      if(res != null){
        data.next(res)
      }
    }, (err: any) => {
      // console.log(err)
    })

    return data.asObservable()
  }

  getMovieImages(movieId: number){
    const data = new Subject<any>();
    this.generalApiService.getMovieImages(movieId).subscribe((res: any) => {
      if(res != null){
        data.next(res)
      }
    }, (err: any) => {
      // console.log(err)
    })

    return data.asObservable()
  }
}
