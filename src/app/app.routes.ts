import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ServicesComponent } from './services/services.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'doctor',component:DoctorsComponent},
    {path:'service',component:ServicesComponent},
    {path:'doctor/details/:id',component:DetailsComponent},
];
