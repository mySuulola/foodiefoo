/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DfService } from './df.service';

describe('Service: Df', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DfService]
    });
  });

  it('should ...', inject([DfService], (service: DfService) => {
    expect(service).toBeTruthy();
  }));
});