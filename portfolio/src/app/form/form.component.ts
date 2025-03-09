import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlStatus, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormStatus } from '@core-models/form.models';
import { take, tap, timer } from 'rxjs';

@Component({
  selector: 'netlify-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: false
})
export class FormComponent {
  submittedInvalid: boolean;
  customFormGroup: FormGroup<{
    username: FormControl<string>,
    password: FormControl<string>
  }>
  constructor(
    private fb: FormBuilder
  ) {
    this.customFormGroup = this.fb.group({
      username: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          this.customValidator
        ],
      }),
      password: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          this.customValidator
        ],
      })
    })
  }

  customValidator: ValidatorFn = (control: AbstractControl): ValidationErrors => ({ customValidator: true })

  onSubmit() {
    if (this.customFormGroup.status === FormStatus.INVALID && !this.submittedInvalid) {
      timer(0, 1000).pipe(
        take(11),
        tap(time => {
          if (time < 10 && this.customFormGroup.status === FormStatus.INVALID) {
            this.submittedInvalid = true
          } else {
            this.submittedInvalid = false
          }
        })
      ).subscribe()
    }
  }

  onChange(status: FormControlStatus) {
    if (status === FormStatus.VALID) {
      this.submittedInvalid = false
    }
  }
}
