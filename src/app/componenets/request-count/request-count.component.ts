import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-request-count',
  templateUrl: './request-count.component.html',
  styleUrls: ['./request-count.component.css'],
  standalone: true,
  imports: [FontAwesomeModule, NgForOf]
})
export class RequestCountComponent {
  @Input() vacationCount: number = 0;
  @Input() leaveCount: number = 0;
  faListCheck = fa.faListCheck;

  get requestTypes() {
    return [
      { count: this.vacationCount, label: 'Vacation Requests' },
      { count: this.leaveCount, label: 'Leave Requests' }
    ];
  }
}
