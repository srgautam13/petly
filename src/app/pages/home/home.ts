import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchFormComponent } from '../../shared/search-form/search-form';

@Component({
  selector: 'app-home',
  imports: [SearchFormComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  onSearch(searchData: any) {
    this.router.navigate(['/search'], { 
      queryParams: {
        location: searchData.location,
        startDate: searchData.startDate?.toISOString(),
        endDate: searchData.endDate?.toISOString()
      }
    });
  }
}