import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriberWithId } from 'src/app/Models/SubscriberWithId.model';
import { SubscribersService } from 'src/app/services/subscribers.service';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-dashboard-subscribers',
    templateUrl: './dashboard-subscribers.component.html',
    styleUrls: ['./dashboard-subscribers.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class DashboardSubscribersComponent {
  subService : SubscribersService = inject(SubscribersService)
  subList$ : Observable<SubscriberWithId[]> = this.subService.loadData()

  deleteSubscriber(subId : string){
    this.subService.deleteData(subId)
  }

}
