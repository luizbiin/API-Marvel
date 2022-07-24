import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHeartComponent } from './favorite-heart.component';

describe('FavoriteHeartComponent', () => {
  let component: FavoriteHeartComponent;
  let fixture: ComponentFixture<FavoriteHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteHeartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
