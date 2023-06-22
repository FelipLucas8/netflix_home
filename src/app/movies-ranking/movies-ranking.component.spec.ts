import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesRankingComponent } from './movies-ranking.component';

describe('MoviesRankingComponent', () => {
  let component: MoviesRankingComponent;
  let fixture: ComponentFixture<MoviesRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
