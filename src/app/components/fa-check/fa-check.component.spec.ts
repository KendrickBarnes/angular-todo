import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaCheckComponent } from './fa-check.component';

describe('FaCheckComponent', () => {
  let component: FaCheckComponent;
  let fixture: ComponentFixture<FaCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
