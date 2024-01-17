import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerDownloadComponent } from './flyer-download.component';

describe('FlyerDownloadComponent', () => {
  let component: FlyerDownloadComponent;
  let fixture: ComponentFixture<FlyerDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyerDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyerDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
