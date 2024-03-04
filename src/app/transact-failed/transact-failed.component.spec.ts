import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactFailedComponent } from './transact-failed.component';

describe('TransactFailedComponent', () => {
  let component: TransactFailedComponent;
  let fixture: ComponentFixture<TransactFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactFailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
