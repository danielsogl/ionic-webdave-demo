import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMovieItemComponent } from './trending-movie-item.component';

describe('TrendingMovieItemComponent', () => {
  let component: TrendingMovieItemComponent;
  let fixture: ComponentFixture<TrendingMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TrendingMovieItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
