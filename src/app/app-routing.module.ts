import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnAuthenticatedViewsModule } from './pages/unauthenticated/unauthenticated.module';
import { UnauthenticatedComponent } from './layouts/unauthenticated/unauthenticated.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
    { path: "", component: UnauthenticatedComponent, loadChildren: () => UnAuthenticatedViewsModule },
    { path: "notfound", component: NotfoundComponent },
    { path: "**", redirectTo: "notfound" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
