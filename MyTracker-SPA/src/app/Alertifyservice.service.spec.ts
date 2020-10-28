/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertifyserviceService } from './Alertifyservice.service';

describe('Service: Alertifyservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertifyserviceService]
    });
  });

  it('should ...', inject([AlertifyserviceService], (service: AlertifyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
