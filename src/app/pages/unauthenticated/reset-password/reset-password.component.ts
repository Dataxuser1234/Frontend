import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
	isSubmitted = false;
	constructor(private fb: FormBuilder) { }
	resetPasswordForm = this.fb.group({
		newPassword: new FormControl('', Validators.required),
		confirmPassword: new FormControl('', Validators.required),
	});

	ngOnInit(): void {

	}
	handleFormSubmit() {
		this.isSubmitted = true;
		if (this.resetPasswordForm.valid) {
			console.log(this.resetPasswordForm.value);
		}
	}
}
