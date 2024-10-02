import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addPlayer(player: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/scorecard-api/add/player`, player);
  }

  getPlayers(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/scorecard-api/players`);
  }
}
