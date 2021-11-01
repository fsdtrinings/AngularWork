import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaVixComponent } from './india-vix.component';

describe('IndiaVixComponent', () => {
  let component: IndiaVixComponent;
  let fixture: ComponentFixture<IndiaVixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiaVixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaVixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
