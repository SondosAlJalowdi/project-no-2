import { Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { ProfileComponent } from './componenets/profile/profile.component';
import { VacationRequestsComponent } from './componenets/vacation-requests/vacation-requests.component';

export const routes: Routes = [
{
    title: 'Home',
    path:'',
    component: HomeComponent
},
{
    title:'Home',
    path:'home',
    component: HomeComponent
},
{
    title:'Profile',
    path:'profile',
    component: ProfileComponent
},
{
    title: 'Vacation Requests',
    path:'vacation-requests',
    component: VacationRequestsComponent
}



];
