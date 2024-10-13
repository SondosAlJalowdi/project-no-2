import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from '../vacation-request-card-1/card.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { HomeEmployeeDetailsComponent } from "../home-employee-details/home-employee-details.component";
import { RequestCountComponent } from "../request-count/request-count.component";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, FontAwesomeModule, FormsModule, RouterLink, RouterLinkActive, ImageSliderComponent, HomeEmployeeDetailsComponent, RequestCountComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
  }[] = [];
  faListCheck = fa.faListCheck;
  faMagnifyingGlass = fa.faMagnifyingGlass;
  searchText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cards = this.dataService.getEmployeeDetails().slice(0, 4);
  }
}
