import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingLoadingItemComponent } from './trending-loading-item.component';

describe('TrendingLoadingItemComponent', () => {
  let component: TrendingLoadingItemComponent;
  let fixture: ComponentFixture<TrendingLoadingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TrendingLoadingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingLoadingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
