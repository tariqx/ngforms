import { TestBed } from '@angular/core/testing';

import { UserJourneyService } from './user-journey.service';

describe('UserJourneyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserJourneyService = TestBed.get(UserJourneyService);
    expect(service).toBeTruthy();
  });
});
