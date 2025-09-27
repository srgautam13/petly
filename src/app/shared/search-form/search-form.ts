import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-search-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './search-form.html',
  styleUrl: './search-form.scss'
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<any>();

  searchData = {
    location: '',
    startDate: null,
    endDate: null
  };

  onSearch() {
    this.search.emit(this.searchData);
  }
}