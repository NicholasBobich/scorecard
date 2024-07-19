import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addPlayer(firstName: string, lastName: string) {
    return this.http.post(`${this.apiBaseUrl}/scorecard-api/add/player`, { "firstName": firstName, "lastName": lastName });
  }
}
