import {Component, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() showIcon: boolean = false;
  @Input() showDelete: boolean = true;
  @Input() showView: boolean = true;

  @Output() viewClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter<any>();

  onViewClick() {
    this.viewClicked.emit();
  }

  onDeleteClick() {
    this.deleteClicked.emit();
  }
}
