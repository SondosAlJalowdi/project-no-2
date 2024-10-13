import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import  * as fa from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileEmployeeDetailsComponent } from "../profile-employee-details/profile-employee-details.component";
import {HistoryCardComponent} from "../history-card/history-card.component";
import {PendingRequestsCardComponent} from "../pending-requests-card/pending-requests-card.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ProfileEmployeeDetailsComponent, HistoryCardComponent, PendingRequestsCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
