import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pr-help',
  templateUrl: './pr-help.component.html',
  styleUrls: ['./pr-help.component.css']
})
export class PrHelpComponent implements OnInit  {

  contactForm: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pnumber: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log('valid?', this.contactForm.valid);
    console.log('fname', this.contactForm.value.fname);
    console.log('lname', this.contactForm.value.lname);
    console.log('email', this.contactForm.value.email);
    console.log('pnumber', this.contactForm.value.pnumber);
  }

}
