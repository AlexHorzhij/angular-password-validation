import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private colors = {
    gray: 'rgb(147, 142, 142)',
    red: 'rgb(255, 21, 0)',
    yellow: 'rgb(255, 255, 0)',
    green: 'rgb(22, 183, 22)',
  };

  public validationMessage = 'Please enter your password';
  public easyStyle = this.colors.gray;
  public mediumStyle = this.colors.gray;
  public strongStyle = this.colors.gray;

  public formGroup = new FormGroup({
    password: new FormControl(''),
  });

  constructor() {}

  onInputChange(value: string) {
    if (value === 'empty') {
      this.validationMessage = 'Enter your password';
      this.easyStyle = this.colors.gray;
      this.mediumStyle = this.colors.gray;
      this.strongStyle = this.colors.gray;
    }
    if (value === 'short') {
      this.validationMessage = 'The password is too short';
      this.easyStyle = this.colors.red;
      this.mediumStyle = this.colors.red;
      this.strongStyle = this.colors.red;
    }
    if (value === 'easy') {
      this.validationMessage = 'The password is too easy';
      this.easyStyle = this.colors.red;
      this.mediumStyle = this.colors.gray;
      this.strongStyle = this.colors.gray;
    }
    if (value === 'medium') {
      this.validationMessage = 'The password isn`t very strong';
      this.easyStyle = this.colors.yellow;
      this.mediumStyle = this.colors.yellow;
      this.strongStyle = this.colors.gray;
    }
    if (value === 'strong') {
      this.validationMessage = 'This password is strong';
      this.easyStyle = this.colors.green;
      this.mediumStyle = this.colors.green;
      this.strongStyle = this.colors.green;
    }
  }
}
