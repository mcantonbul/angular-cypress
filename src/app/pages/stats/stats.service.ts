import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class StatsService{

    constructor(private httpClient: HttpClient) {
    }

    getNBAPlayerAvgStats(playerId: number): Observable<any>{
        return this.httpClient.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`);
    }
}