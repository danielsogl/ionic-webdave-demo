import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsTabComponent } from './tv-shows-tab.component';

describe('TvShowsTabComponent', () => {
  let component: TvShowsTabComponent;
  let fixture: ComponentFixture<TvShowsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TvShowsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
