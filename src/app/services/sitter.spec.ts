import { TestBed } from '@angular/core/testing';

import { Sitter } from './sitter';

describe('Sitter', () => {
  let service: Sitter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sitter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
