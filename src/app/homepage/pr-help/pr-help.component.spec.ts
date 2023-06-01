import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrHelpComponent } from './pr-help.component';

describe('PrHelpComponent', () => {
  let component: PrHelpComponent;
  let fixture: ComponentFixture<PrHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
