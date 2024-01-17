import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnreiseComponent } from './anreise.component';

describe('AnreiseComponent', () => {
  let component: AnreiseComponent;
  let fixture: ComponentFixture<AnreiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnreiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
