import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TripListComponent } from './trip-list/trip-list.component';

const routes: Routes = [
  {path:'trips',component: TripListComponent},
  {path:'create-trip',component: CreateTripComponent},
  {path:'create-user',component: CreateUserComponent},
  {path:'',redirectTo:'trips',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
