import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const SEARCH_SITTERS = gql`
  query SearchSitters($location: String!, $startDate: String!, $endDate: String!) {
    searchSitters(location: $location, startDate: $startDate, endDate: $endDate) {
      id
      name
      bio
      hourlyRate
      rating
      profileImage
      services
    }
  }
`;

const GET_SITTER = gql`
  query GetSitter($id: ID!) {
    sitter(id: $id) {
      id
      name
      bio
      hourlyRate
      rating
      profileImage
      services
      availability
      reviews {
        id
        rating
        comment
        ownerName
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SitterService {
  constructor(private apollo: Apollo) {}

  searchSitters(location: string, startDate: string, endDate: string): Observable<any> {
    return this.apollo.query({
      query: SEARCH_SITTERS,
      variables: { location, startDate, endDate }
    });
  }

  getSitter(id: string): Observable<any> {
    return this.apollo.query({
      query: GET_SITTER,
      variables: { id }
    });
  }
}