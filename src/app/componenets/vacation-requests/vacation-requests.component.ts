import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from '../vacation-request-card-1/card.component';
import { Card2Component } from '../vacation-request-card-2/card-2.component';
import { PagerComponent } from '../pager/pager.component';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule, CardComponent, Card2Component, PagerComponent, HighlightPipe],
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.css'],
  providers: [DatePipe]
})
export class VacationRequestsComponent {
  searchText: string = '';
  cards: {
    imgSrc: string;
    name: string;
    submittedOn: string | null;
    duration: string;
    salary: string;
    title: string;
    dateRange: string;
    days: string;
    approvedBy: string;
    isSelected: boolean;
  }[] = [];

  faListCheck = fa.faListCheck;
  faSearch = fa.faSearch;
  faFilter = fa.faFilter;
  allSelected: boolean = false;
  showCheckboxes: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 12;


  ngOnInit() {
    this.cards = this.dataService.getEmployeeDetails();
  }

  constructor(private datePipe: DatePipe,private dataService: DataService) {
    this.cards = this.cards.map(card => ({
      ...card,
      submittedOn: this.datePipe.transform(card.submittedOn, 'MM/dd/yyyy'),
      duration: card.duration.split(' - ').map(date => this.datePipe.transform(date, 'MM/dd/yyyy')).join(' - ')
    }));
  }

  onSelectAllChange(event: any) {
    this.allSelected = event.target.checked;
    this.showCheckboxes = this.allSelected;
    this.cards.forEach(card => card.isSelected = this.allSelected);
  }

  onCardSelectionChange(index: number, isSelected: boolean) {
    this.cards[index].isSelected = isSelected;
    this.allSelected = this.cards.every(card => card.isSelected);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  get paginatedCards() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.cards.slice(start, end);
  }
}
