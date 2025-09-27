import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSitter } from './dashboard-sitter';

describe('DashboardSitter', () => {
  let component: DashboardSitter;
  let fixture: ComponentFixture<DashboardSitter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSitter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSitter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
