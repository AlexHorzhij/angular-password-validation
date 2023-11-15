import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Output() getStatus = new EventEmitter<string>();

  public value: string | undefined;

  public onChange: (value: string) => void;
  public onTouched: () => void;

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private validateService: ValidateService
  ) {}

  public onPasswordValueChange(event: Event): void {
    const value = (<HTMLInputElement>event.target).value;
    this.validateService.validateLanguage(value);
    const status = this.validateService.validatePassword(value);

    this.getStatus.emit(status);
    this.onChange(value);
  }

  public writeValue(value: string): void {
    this.value = value;
    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
