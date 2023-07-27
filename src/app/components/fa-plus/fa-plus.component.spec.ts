import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaPlusComponent } from './fa-plus.component';

describe('FaPlusComponent', () => {
  let component: FaPlusComponent;
  let fixture: ComponentFixture<FaPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
