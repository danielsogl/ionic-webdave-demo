import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTabComponent } from './movies-tab.component';

describe('MoviesTabComponent', () => {
  let component: MoviesTabComponent;
  let fixture: ComponentFixture<MoviesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MoviesTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
