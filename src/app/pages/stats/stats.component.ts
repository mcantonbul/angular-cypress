import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  data$: Observable<any>;
  constructor(private statsService: StatsService) {
    /**
     * 237: Lebron James Player Id
     */
    this.data$ = this.statsService.getNBAPlayerAvgStats(237);
  }
}
