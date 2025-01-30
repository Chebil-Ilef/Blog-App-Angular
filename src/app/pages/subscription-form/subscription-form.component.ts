import { ChangeDetectionStrategy,Component, OnDestroy, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Subscriber } from '../../Models/Subscriber.model';
import { SubscribersService } from '../../services/subscribers.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-subscription-form',
    templateUrl: './subscription-form.component.html',
    styleUrls: ['./subscription-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule, NgClass, NgIf]
})
export class SubscriptionFormComponent implements OnDestroy{

  subscribersService : SubscribersService = inject(SubscribersService)
  subscription!: Subscription
  toastr : ToastrService = inject(ToastrService)
  onSubmit(subForm : NgForm){
    const subData : Subscriber = {
      name : subForm.value.name,
      email : subForm.value.email
    }
    this.subscription = this.subscribersService.checkSubs(subData.email).subscribe((sub)=>{
      if(sub.length == 0){
        this.subscribersService.saveData(subData)        
      }else{
        this.toastr.error('Email already subscribed !')
      }
      this.subscription.unsubscribe()

      subForm.reset()
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
