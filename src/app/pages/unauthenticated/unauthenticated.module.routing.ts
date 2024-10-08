import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from "src/app/pages/unauthenticated/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "src/app/pages/unauthenticated/reset-password/reset-password.component";
import { SigninComponent } from "src/app/pages/unauthenticated/signin/signin.component";
import { SignupComponent } from "src/app/pages/unauthenticated/signup/signup.component";

const routes: Routes = [
	{
		path: "signin",
		component: SigninComponent
	},
	{
		path: "forgot-password",
		component: ForgotPasswordComponent
	},
	{
		path: "reset-password",
		component: ResetPasswordComponent
	},
	{
		path: "signup",
		component: SignupComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UnAuthenticatedRoutingModule { }
