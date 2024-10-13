import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import  * as fa from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-employee-details',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './profile-employee-details.component.html',
  styleUrl: './profile-employee-details.component.css'
})
export class ProfileEmployeeDetailsComponent {
  faUser = fa.faUser;
  faChart = fa.faChartSimple;
  faHourGlass = fa.faHourglassHalf;
  faVacation = fa.faUmbrellaBeach;
  faSick = fa.faPills;
  

}
