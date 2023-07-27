import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaPencilComponent } from './fa-pencil.component';

describe('FaPencilComponent', () => {
  let component: FaPencilComponent;
  let fixture: ComponentFixture<FaPencilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaPencilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaPencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
