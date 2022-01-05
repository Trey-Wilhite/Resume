import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteWillFerrelMoviesPageComponent } from './favorite-will-ferrel-movies-page.component';

describe('FavoriteWillFerrelMoviesPageComponent', () => {
  let component: FavoriteWillFerrelMoviesPageComponent;
  let fixture: ComponentFixture<FavoriteWillFerrelMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteWillFerrelMoviesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteWillFerrelMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
