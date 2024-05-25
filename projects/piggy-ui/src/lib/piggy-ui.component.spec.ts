import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiggyUiComponent } from './piggy-ui.component';

describe('PiggyUiComponent', () => {
  let component: PiggyUiComponent;
  let fixture: ComponentFixture<PiggyUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiggyUiComponent]
    });
    fixture = TestBed.createComponent(PiggyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
