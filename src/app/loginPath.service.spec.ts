/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginPathService } from './loginPath.service';

describe('Service: LoginPath', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginPathService]
    });
  });

  it('should ...', inject([LoginPathService], (service: LoginPathService) => {
    expect(service).toBeTruthy();
  }));
});
