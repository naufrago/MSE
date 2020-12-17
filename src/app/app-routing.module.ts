import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { StaffComponent } from './components/staff/staff.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Student', component: StudentComponent },
  { path: 'Staff', component: StaffComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
