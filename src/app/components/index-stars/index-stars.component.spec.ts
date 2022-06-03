import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStarsComponent } from './index-stars.component';

describe('IndexStarsComponent', () => {
  let component: IndexStarsComponent;
  let fixture: ComponentFixture<IndexStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
