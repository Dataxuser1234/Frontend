import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
	isSubmitted = false;
	constructor(private fb: FormBuilder) { }
	signinForm = this.fb.group({
		username: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	});

	ngOnInit(): void {

	}
	handleFormSubmit() {
		this.isSubmitted = true;
		if (this.signinForm.valid) {
			console.log(this.signinForm.value);
		}
	}
}
