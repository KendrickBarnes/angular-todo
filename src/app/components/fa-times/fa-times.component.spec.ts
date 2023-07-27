import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaTimesComponent } from './fa-times.component';

describe('FaTimesComponent', () => {
  let component: FaTimesComponent;
  let fixture: ComponentFixture<FaTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
