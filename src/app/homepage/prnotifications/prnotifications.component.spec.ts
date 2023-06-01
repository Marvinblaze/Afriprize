import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrnotificationsComponent } from './prnotifications.component';

describe('PrnotificationsComponent', () => {
  let component: PrnotificationsComponent;
  let fixture: ComponentFixture<PrnotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrnotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
