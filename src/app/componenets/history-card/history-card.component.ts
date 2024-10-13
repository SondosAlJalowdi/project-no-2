import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import  * as fa from '@fortawesome/free-solid-svg-icons';
import {DataService} from "../../services/data.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [FontAwesomeModule, NgForOf],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {

  vacationHistory: {
    title: string;
    duration: string;
    days: string;
    approvedBy: string;
  }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.vacationHistory = this.dataService.getVacationHistory();
  }

  faHistory = fa.faHistory;

}
