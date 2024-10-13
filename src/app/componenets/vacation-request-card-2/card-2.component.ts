import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card-2',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card-2.component.html',
  styleUrls: ['./card-2.component.css']
})
export class Card2Component {
  @Input() name: string = '';
  @Input() imgSrc: string = '';
  @Input() salary: string = '';
  @Input() duration: string = '';
  @Input() submittedOn: string | null = null;
  @Input() searchText: string = '';
  @Input() isSelected: boolean = false;
  @Input() showCheckboxes: boolean = false;
  @Output() selectionChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onSelectionChange(event: any) {
    this.selectionChange.emit(event.target.checked);
  }
}
