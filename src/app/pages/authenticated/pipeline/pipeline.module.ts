import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipelineRoutingModule } from "./pipeline.module.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CommonModule,
		PipelineRoutingModule,
		ReactiveFormsModule,
		FormsModule,
	],
})
export class PipelineModule { }