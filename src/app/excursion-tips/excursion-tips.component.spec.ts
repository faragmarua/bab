import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionTipsComponent } from './excursion-tips.component';

describe('ExcursionTipsComponent', () => {
  let component: ExcursionTipsComponent;
  let fixture: ComponentFixture<ExcursionTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
