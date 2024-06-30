import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
	isSubmitted = false;
	constructor(private fb: FormBuilder) { }
	forgotPasswordForm = this.fb.group({
		username: new FormControl('', Validators.required)
	});

	ngOnInit(): void {

	}
	handleFormSubmit() {
		this.isSubmitted = true;
		if (this.forgotPasswordForm.valid) {
			console.log(this.forgotPasswordForm.value);
		}
	}
}