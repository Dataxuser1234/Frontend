import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticatedRoutingModule } from "./authenticated.module.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticatedComponent } from "src/app/layouts/authenticated/authenticated.component";

@NgModule({
	declarations: [
		AuthenticatedComponent
	],
	imports: [
		CommonModule,
		AuthenticatedRoutingModule,
		ReactiveFormsModule,
		FormsModule,
	],
})
export class AuthenticatedViewsModule { }