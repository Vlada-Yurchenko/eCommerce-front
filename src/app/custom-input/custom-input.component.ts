import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  @Output() customInputEvent = new EventEmitter<string>();

  changeCustomInputValue(value: string) {
    this.customInputEvent.emit(value);
  }
}
