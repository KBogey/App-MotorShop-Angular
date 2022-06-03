import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoDetailComponent } from './moto-detail.component';

describe('MotoDetailComponent', () => {
  let component: MotoDetailComponent;
  let fixture: ComponentFixture<MotoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
