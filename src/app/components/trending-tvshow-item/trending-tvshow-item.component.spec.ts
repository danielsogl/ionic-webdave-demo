import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTVShowItemComponent } from './trending-tvshow-item.component';

describe('TrendingTVShowItemComponent', () => {
  let component: TrendingTVShowItemComponent;
  let fixture: ComponentFixture<TrendingTVShowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TrendingTVShowItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTVShowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
