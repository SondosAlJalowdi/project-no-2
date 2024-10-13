import {Injectable} from '@angular/core';
import {Employee} from "../models/employee.model";
import {VacationHistory} from "../models/vacation-history.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cards: {
    duration: string;
    dateRange: string;
    name: string;
    submittedOn: string | null;
    approvedBy: string;
    isSelected: boolean;
    days: string;
    salary: string;
    title: string;
    imgSrc: string
  }[] = [
    {
      imgSrc: "assets/images/user.png",
      name: "John Doe",
      submittedOn: "2024-07-20",
      duration: "2024-07-06 - 2024-07-13",
      salary: "1980 JD",
      title: "Non Paid Vacation",
      dateRange: "2023-05-12 - 2023-05-14",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "John Doe",
      submittedOn: "2023-09-17",
      duration: "2024-11-06 - 2024-11-13",
      salary: "734 JD",
      title: "Annual Vacation",
      dateRange: "2023-01-04 - 2023-01-07",
      days: "5 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      salary: "2493 JD",
      title: "Sick Vacation",
      dateRange: "2023-06-20 - 2023-06-29",
      days: "6 days",
      approvedBy: "James Smith",
      isSelected: false
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      salary: "2377 JD",
      title: "Annual Vacation",
      dateRange: "2023-02-27 - 2023-02-28",
      days: "2 days",
      approvedBy: "James Smith",
      isSelected: false
    }
  ];

  vacationHistory: {
    title: string;
    duration: string;
    days: string;
    approvedBy: string;
  }[] = [{
    title: "Annual Vacation",
    duration: "2023-02-27 - 2023-02-28",
    days: "2 days",
    approvedBy: "James Smith"
  }, {
    title: "Sick Vacation",
    duration: "2023-06-20 - 2023-06-29",
    days: "6 days",
    approvedBy: "James Smith"
  }, {
    title: "Annual Vacation",
    duration: "2023-01-04 - 2023-01-07",
    days: "5 days",
    approvedBy: "James Smith"
  }, {
    title: "Non Paid Vacation",
    duration: "2024-07-06 - 2024-07-13",
    days: "7 days",
    approvedBy: "James Smith"
  }, {
    title: "Annual Vacation",
    duration: "2024-04-05 - 2024-04-26",
    days: "21 days",
    approvedBy: "James Smith"
  }, {
    title: "Sick Vacation",
    duration: "2024-08-09 - 2024-08-30",
    days: "21 days",
    approvedBy: "James Smith"
  }];

  pendingRequests: {
    imgSrc: string;
    name: string;
    submittedOn: string;
    duration: string;
    currentlyAt: string;
  }[] = [
    {
      imgSrc: "assets/images/user.png",
      name: "Michael Brown",
      submittedOn: "2023-11-16",
      duration: "2024-08-09 - 2024-08-30",
      currentlyAt: "James Smith"
    },
    {
      imgSrc: "assets/images/user2.png",
      name: "Jane Smith",
      submittedOn: "2024-08-18",
      duration: "2024-04-05 - 2024-04-26",
      currentlyAt: "James Smith"
    }, ];

  getEmployeeDetails(): Employee[] {
    return this.cards;
  }

  getVacationHistory(): VacationHistory[] {
    return this.vacationHistory;
  }

  getPendingRequests() {
    return this.pendingRequests;
  }
}
