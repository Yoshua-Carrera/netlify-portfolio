import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup
  get email() {
    return this.contactForm.get('email');
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', Validators.email],
      message: ['']
    })
  }

  onSubmit() {
    console.log(this.contactForm?.value)
    console.log(this.contactForm.valid)
    this.contactForm?.reset()
  }
}
