import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnauthenticatedComponent } from "../../layouts/unauthenticated/unauthenticated.component";
import { UnAuthenticatedRoutingModule } from "./unauthenticated.module.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@NgModule({
	declarations: [
		UnauthenticatedComponent,
		SigninComponent,
		SignupComponent,
		ResetPasswordComponent,
		ForgotPasswordComponent
	],
	imports: [
		CommonModule,
		UnAuthenticatedRoutingModule,
		ReactiveFormsModule,
		FormsModule,
	],
})
export class UnAuthenticatedViewsModule { }