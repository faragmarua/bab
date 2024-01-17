import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerrechnungComponent } from './verrechnung.component';

describe('VerrechnungComponent', () => {
  let component: VerrechnungComponent;
  let fixture: ComponentFixture<VerrechnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerrechnungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerrechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
