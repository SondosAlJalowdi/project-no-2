import { Component } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import  * as fa from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-employee-details',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './home-employee-details.component.html',
  styleUrl: './home-employee-details.component.css'
})
export class HomeEmployeeDetailsComponent {
  faUser = fa.faUser;
  faChart = fa.faChartSimple;
}
