import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PipelineModule } from "./pipeline/pipeline.module";

const routes: Routes = [
	{ path: "pipeline", loadChildren: () => PipelineModule },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthenticatedRoutingModule { }
