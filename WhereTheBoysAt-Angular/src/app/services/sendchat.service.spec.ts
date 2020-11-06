import { TestBed } from '@angular/core/testing';

import { SendchatService } from './sendchat.service';

describe('SendchatService', () => {
  let service: SendchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
