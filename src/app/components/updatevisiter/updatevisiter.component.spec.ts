import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevisiterComponent } from './updatevisiter.component';

describe('UpdatevisiterComponent', () => {
  let component: UpdatevisiterComponent;
  let fixture: ComponentFixture<UpdatevisiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevisiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatevisiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
