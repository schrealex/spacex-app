import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {

  constructor(private readonly pastLaunchesService: PastLaunchesListGQL) {
  }

  pastLaunches$ = this.pastLaunchesService.fetch({ limit: 30 })
    .pipe(map(
      response => response.data.launchesPast
    ));
}
