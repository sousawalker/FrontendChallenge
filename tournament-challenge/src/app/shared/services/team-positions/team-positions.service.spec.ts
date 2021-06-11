import { TestBed } from '@angular/core/testing';

import { TeamPositionsService } from './team-positions.service';

describe('TeamPositionsService', () => {
  let service: TeamPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
