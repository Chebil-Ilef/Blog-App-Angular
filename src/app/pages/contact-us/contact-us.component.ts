import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactForm } from 'src/app/Models/ContactForm.model';
import { ContactService } from 'src/app/services/contact.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule, NgIf, AsyncPipe]
})
export class ContactUsComponent {

  private contactService : ContactService = inject(ContactService)
  response !:Observable<string>

  onSubmit(data : NgForm) {
    const dataToSend : ContactForm= {
      name : data.value.name,
      email : data.value.email,
      message : data.value.message,
      subject : data.value.subject,
      access_key : "6ac8f221-72fa-428d-9137-c7c4d2184d6a"
    }

    this.response = this.contactService.sendMessage(dataToSend)

    data.reset()


  }
}