import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SearchResultsComponent } from './pages/search-results/search-results';
import { SitterDetailsComponent } from './pages/sitter-details/sitter-details';
import { BookingComponent } from './pages/booking/booking';
import { LoginComponent } from './pages/login/login';
import { DashboardOwnerComponent } from './pages/dashboard-owner/dashboard-owner';
import { DashboardSitterComponent } from './pages/dashboard-sitter/dashboard-sitter';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'sitter/:id', component: SitterDetailsComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'owner', component: DashboardOwnerComponent },
  { path: 'sitter', component: DashboardSitterComponent },
  { path: '**', redirectTo: '' }
];
