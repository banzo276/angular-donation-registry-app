import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationDetailComponent } from './components/donation-detail/donation-detail.component';
import { DonationListComponent } from './components/donation-list/donation-list.component';

const routes: Routes = [
  { path: 'donations/:id', component: DonationDetailComponent },
  { path: 'donations', component: DonationListComponent },
  { path: '', redirectTo: '/donations', pathMatch: 'full' },
  { path: '**', redirectTo: '/donations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
