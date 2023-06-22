import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { GeneralService } from '../general-service/general.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movies-ranking',
  templateUrl: './movies-ranking.component.html',
  styleUrls: ['./movies-ranking.component.scss']
})
export class MoviesRankingComponent implements OnInit {
  @Input() title!: string;
  trendingMovies: any[] = []

  image1: boolean = false
  image2: boolean = false
  image3: boolean = false
  image4: boolean = false
  image5: boolean = false
  image6: boolean = false
  image7: boolean = false
  image8: boolean = false
  image9: boolean = false
  image10: boolean = false
  
  test = false

  constructor(private renderer: Renderer2,
    private elementRef: ElementRef,
    private generalService: GeneralService,
    private sanitizer: DomSanitizer){}
  
  ngOnInit(): void {
    this.generalService.getTrendingMovies().subscribe((res:any) => {
      this.trendingMovies = res.results
      
      this.trendingMovies.forEach((e:any) => {
        this.generalService.getMovieVideo(e.id).subscribe((res: any) => {
          e.video = res
          let linkVideo = 'https://www.youtube.com/embed/' + e.video.results[0].key + '?' + 'autoplay=true';
          e.linkVideo = this.sanitizer.bypassSecurityTrustResourceUrl(linkVideo)
        })    
      });
    })
  
  }

  mouseOver(event: any) {
    const elementId = (event.target as HTMLElement).id;
    const element = this.elementRef.nativeElement.querySelector('#card' + elementId);
  
    switch (elementId) {
      case '1':
        this.image1 = true
        break;
      case '2':
        this.image2 = true
        break;
      case '3':
        this.image3 = true
        break;
      case '4':
        this.image4 = true
        break;
      case '5':
        this.image5 = true
        break;
      case '6':
        this.image6 = true
        break;
      case '7':
        this.image7 = true
        break;
      case '8':
        this.image8 = true
        break;
      case '9':
        this.image9 = true
        break;
      case '10':
        this.image10 = true
        break;
    
      default:
        break;
    }
  }

  mouseOut(event: any){
    const elementId = (event.target as HTMLElement).id;

    switch (elementId) {
      case '1':
        this.image1 = false
        break;
      case '2':
        this.image2 = false
        break;
      case '3':
        this.image3 = false
        break;
      case '4':
        this.image4 = false
        break;
      case '5':
        this.image5 = false
        break;
      case '6':
        this.image6 = false
        break;
      case '7':
        this.image7 = false
        break;
      case '8':
        this.image8 = false
        break;
      case '9':
        this.image9 = false
        break;
      case '10':
        this.image10 = false
        break;
    
      default:
        break;
    }
  }
}
