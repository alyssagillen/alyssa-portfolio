import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCaseComponent } from './registration-case.component';

describe('RegistrationCaseComponent', () => {
  let component: RegistrationCaseComponent;
  let fixture: ComponentFixture<RegistrationCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
