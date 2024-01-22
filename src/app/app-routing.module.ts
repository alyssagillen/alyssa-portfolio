import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinCaseComponent } from './bulletin-case/bulletin-case.component';
import { HarvestlyCaseComponent } from './harvestly-case/harvestly-case.component';
import { HomeComponent } from './home/home.component';
import { RegistrationCaseComponent } from './registration-case/registration-case.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'case-study-one', component: RegistrationCaseComponent},
  {path: 'case-study-two', component: HarvestlyCaseComponent},
  {path: 'case-study-three', component: BulletinCaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
