import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactSuccessComponent } from './transact-success.component';

describe('TransactSuccessComponent', () => {
  let component: TransactSuccessComponent;
  let fixture: ComponentFixture<TransactSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
