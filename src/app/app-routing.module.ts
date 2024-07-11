import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnAuthenticatedViewsModule } from './pages/unauthenticated/unauthenticated.module';
import { UnauthenticatedComponent } from './layouts/unauthenticated/unauthenticated.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthenticatedComponent } from './layouts/authenticated/authenticated.component';
import { AuthenticatedViewsModule } from './pages/authenticated/authenticated.module';

const routes: Routes = [
    { path: "", redirectTo: "pipeline", pathMatch: "full" },
    { path: "auth", component: UnauthenticatedComponent, loadChildren: () => UnAuthenticatedViewsModule },
    { path: "", component: AuthenticatedComponent, loadChildren: () => AuthenticatedViewsModule },
    { path: "notfound", component: NotfoundComponent },
    { path: "**", redirectTo: "notfound" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
