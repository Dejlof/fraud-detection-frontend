import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadingComponent } from './table-heading.component';

describe('TableHeadingComponent', () => {
  let component: TableHeadingComponent;
  let fixture: ComponentFixture<TableHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
