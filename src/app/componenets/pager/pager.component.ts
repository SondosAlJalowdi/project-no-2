import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./pager.component.css']
})
export class PagerComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }
}
