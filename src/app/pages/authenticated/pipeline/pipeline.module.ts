import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipelineRoutingModule } from "./pipeline.module.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { PipelineItemComponent } from './components/pipeline-item/pipeline-item.component';
import { ProcessComponent } from './process/process.component';

@NgModule({
	declarations: [
		HomeComponent,
  		PipelineItemComponent,
    	ProcessComponent,
	],
	imports: [
		CommonModule,
		PipelineRoutingModule,
		ReactiveFormsModule,
		FormsModule,
	],
	exports: [
		PipelineItemComponent
	]
})
export class PipelineModule { }