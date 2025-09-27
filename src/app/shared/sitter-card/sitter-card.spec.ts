import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterCard } from './sitter-card';

describe('SitterCard', () => {
  let component: SitterCard;
  let fixture: ComponentFixture<SitterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
