import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingstateComponent } from './loadingstate.component';

describe('LoadingstateComponent', () => {
  let component: LoadingstateComponent;
  let fixture: ComponentFixture<LoadingstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingstateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
