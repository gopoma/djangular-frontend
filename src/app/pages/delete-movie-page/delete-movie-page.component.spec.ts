import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMoviePageComponent } from './delete-movie-page.component';

describe('DeleteMoviePageComponent', () => {
  let component: DeleteMoviePageComponent;
  let fixture: ComponentFixture<DeleteMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMoviePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
