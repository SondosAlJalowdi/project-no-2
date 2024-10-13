import { Component, Input } from '@angular/core';
import { HighlightPipe } from '../../pipes/highlight.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HighlightPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})



export class CardComponent {
  @Input() imgSrc: any;
  @Input() name: any;
  @Input() submittedOn: any;
  @Input() duration: any;
  @Input() salary: any;
  @Input() searchText: any;

  constructor() {


  }

  ngOnInit() {

  }

  showAlert(val: boolean) {
      if(val)
        alert("Approved")
      else{
        alert("Declined")
      }
    }
}
