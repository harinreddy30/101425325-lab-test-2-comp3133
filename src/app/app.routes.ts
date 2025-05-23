import { Routes } from '@angular/router';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

export const appRoutes: Routes = [
  { path: '', component: MissionlistComponent },
  {
    path: 'mission/:id',
    component: MissiondetailsComponent,
    data: {
      getPrerenderParams: () => []
    }
  }
];
