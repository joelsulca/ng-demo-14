import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Output() text: EventEmitter<string> = new EventEmitter();

  getTextValue(event: Event) {
    const textValue = (event.target as HTMLInputElement).value;
    this.text.emit(textValue);
  }
}