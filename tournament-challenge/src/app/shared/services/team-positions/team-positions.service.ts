import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamPositionsService {
  restApi = environment.restApi;

  constructor(
    private http: HttpClient
  ) { }

  editTeamPositions(id: number, team: object) {
    return this.http.put(`${this.restApi}/team-positions/${id}`, team);
  }

  listTeamPositions() {
    return this.http.get(`${this.restApi}/team-positions`);
  }

  getTeamPositions(id: number) {
    return this.http.get(`${this.restApi}/team-positions/${id}`);
  }
}
