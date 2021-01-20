import { TestBed } from '@angular/core/testing';

import { TeamMembersManagerService } from './team-members-manager.service';

describe('TeamMembersManagerService', () => {
  let service: TeamMembersManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMembersManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
