import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestlyCaseComponent } from './harvestly-case.component';

describe('HarvestlyCaseComponent', () => {
  let component: HarvestlyCaseComponent;
  let fixture: ComponentFixture<HarvestlyCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarvestlyCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarvestlyCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
