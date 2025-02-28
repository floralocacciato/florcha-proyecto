import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreComponent } from './libre.component';

describe('LibreComponent', () => {
  let component: LibreComponent;
  let fixture: ComponentFixture<LibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibreComponent]
    });
    fixture = TestBed.createComponent(LibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
