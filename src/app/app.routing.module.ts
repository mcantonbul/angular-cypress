import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { PagesLayoutComponent } from "./pages/pages-layout.component";
import { StatsComponent } from "./pages/stats/stats.component";

export const routes: Routes = [
    {
        path: '',
        component: PagesLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'stats',
                component: StatsComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }