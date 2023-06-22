import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../general-service/general.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any = []
  trendingMovies: any = []
  mainVideoString: any
  mainVideoTitle: any

  constructor(private generalService: GeneralService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.generalService.getAllMovies().subscribe((res: any) => {
      this.movies = res.results

      this.getTrendingMovies()
    })
  }

  getTrendingMovies() {
    this.generalService.getTrendingMovies().subscribe((res: any) => {
      this.trendingMovies = res.results

      this.trendingMovies.forEach((e: any) => {
        this.generalService.getMovieVideo(e.id).subscribe((res: any) => {
          e.video = res
          let linkVideo = 'https://www.youtube.com/embed/' + e.video.results[0].key + '?' + 'autoplay=true';
          e.linkVideo = this.sanitizer.bypassSecurityTrustResourceUrl(linkVideo)
          if (e.id == 385687) {
            this.mainVideoString = e.linkVideo;
            this.generalService.getMovieImages(e.id ).subscribe((res: any) => {
              this.mainVideoTitle = 'https://image.tmdb.org/t/p/w500' + res.logos[0].file_path
            })
            ;
          }

        });
      });
    })
  }
}
