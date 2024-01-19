import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinCaseComponent } from './bulletin-case.component';

describe('BulletinCaseComponent', () => {
  let component: BulletinCaseComponent;
  let fixture: ComponentFixture<BulletinCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulletinCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
