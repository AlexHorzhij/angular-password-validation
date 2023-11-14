import { Component, Input } from '@angular/core';
import { ValidateService } from './services/validate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() value: string;

  title = 'angular-validation';

  inputValue: string;
  validationMessage = 'Please enter your password';
  passwordReliability = 'empty';
  colors = {
    gray: 'rgb(147, 142, 142)',
    red: 'rgb(255, 21, 0)',
    yellow: 'rgb(255, 255, 0)',
    green: 'rgb(22, 183, 22)',
  };

  constructor(private validateService: ValidateService) {}

  checkLang(value: string) {
    if (!/[a-zA-Z0-9]/.test(value)) {
      alert('You can use only latin characters!');
    }
  }

  getInputValue(value: string) {
    this.checkLang(value);
    this.inputValue = value;
    this.passwordReliability = this.validateService.validatePassword(
      this.inputValue || ''
    );
  }

  getValidationMessage() {
    if (this.passwordReliability === 'short') {
      return 'The password is too short';
    }
    if (this.passwordReliability === 'easy') {
      return 'The password is too easy';
    }
    if (this.passwordReliability === 'medium') {
      return 'The password isn`t very strong';
    }
    if (this.passwordReliability === 'strong') {
      return 'This password strong';
    }
    return 'Enter your password';
  }

  getStyleForEasyPassword() {
    if (this.passwordReliability === 'short') return this.colors.red;
    if (
      this.passwordReliability === 'easy' ||
      this.passwordReliability === 'medium'
    ) {
      return this.colors.yellow;
    }
    if (this.passwordReliability === 'strong') return this.colors.green;
    return this.colors.gray;
  }

  getStyleForMediumPassword() {
    if (this.passwordReliability === 'short') return this.colors.red;
    if (this.passwordReliability === 'medium') return this.colors.yellow;
    if (this.passwordReliability === 'strong') return this.colors.green;
    return this.colors.gray;
  }
  getStyleForStrongPassword() {
    if (this.passwordReliability === 'short') return this.colors.red;
    if (this.passwordReliability === 'strong') return this.colors.green;
    return this.colors.gray;
  }
}
