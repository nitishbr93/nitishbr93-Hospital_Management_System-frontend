import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagoutComponent } from './lagout.component';

describe('LagoutComponent', () => {
  let component: LagoutComponent;
  let fixture: ComponentFixture<LagoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LagoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
