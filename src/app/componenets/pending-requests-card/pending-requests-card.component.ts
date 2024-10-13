import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import * as fa from "@fortawesome/free-solid-svg-icons";
import {NgForOf} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-pending-requests-card',
  standalone: true,
  imports: [
    NgForOf,
    FontAwesomeModule
  ],
  templateUrl: './pending-requests-card.component.html',
  styleUrl: './pending-requests-card.component.css'
})
export class PendingRequestsCardComponent {

  pendingRequests: {
    imgSrc: string;
    name: string;
    submittedOn: string;
    duration: string;
    currentlyAt: string;
  }[] = [];
  faCheck = fa.faListCheck

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.pendingRequests = this.dataService.getPendingRequests();
  }

}
