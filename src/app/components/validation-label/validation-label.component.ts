import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-label',
  templateUrl: './validation-label.component.html',
  styleUrls: ['./validation-label.component.scss'],
})
export class ValidationLabelComponent {
  @Input() color: string;
}
