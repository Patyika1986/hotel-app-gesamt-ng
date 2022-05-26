import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvnetSignupComponent } from './evnet-signup.component';

describe('EvnetSignupComponent', () => {
  let component: EvnetSignupComponent;
  let fixture: ComponentFixture<EvnetSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvnetSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvnetSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
