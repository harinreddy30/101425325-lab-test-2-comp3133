// missionlist.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../../models/Mission';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  allMissions: Mission[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.spacexService.getMissions().subscribe((data) => {
      this.missions = data;
      this.allMissions = data;
    });
  }

  onYearFilter(year: string): void {
    if (year) {
      this.spacexService.getMissionsByYear(year).subscribe((data) => {
        this.missions = data;
      });
    } else {
      this.missions = this.allMissions;
    }
  }

  goToMissionDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }
}
