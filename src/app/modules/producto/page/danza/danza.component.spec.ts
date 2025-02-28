import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanzaComponent } from './danza.component';

describe('DanzaComponent', () => {
  let component: DanzaComponent;
  let fixture: ComponentFixture<DanzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanzaComponent]
    });
    fixture = TestBed.createComponent(DanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
