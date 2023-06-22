import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetverificationComponent } from './forgetverification.component';

describe('ForgetverificationComponent', () => {
  let component: ForgetverificationComponent;
  let fixture: ComponentFixture<ForgetverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
