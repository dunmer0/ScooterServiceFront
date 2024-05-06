import {Component, EventEmitter, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() selected = new EventEmitter<string>();

constructor(protected router:Router) {}

  onSelected(selected: string) {
    this.selected.emit(selected);
  }
}
