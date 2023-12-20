import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MietobjekteComponent } from './mietobjekte.component';

describe('MietobjekteComponent', () => {
  let component: MietobjekteComponent;
  let fixture: ComponentFixture<MietobjekteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MietobjekteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MietobjekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
