import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const QUOTE_PRICE = gql`
  mutation QuotePrice($sitterId: ID!, $startDate: String!, $endDate: String!, $services: [String!]!) {
    quotePrice(sitterId: $sitterId, startDate: $startDate, endDate: $endDate, services: $services) {
      totalPrice
      breakdown {
        service
        hours
        rate
        subtotal
      }
    }
  }
`;

const REQUEST_BOOKING = gql`
  mutation RequestBooking($sitterId: ID!, $startDate: String!, $endDate: String!, $services: [String!]!, $petIds: [ID!]!) {
    requestBooking(sitterId: $sitterId, startDate: $startDate, endDate: $endDate, services: $services, petIds: $petIds) {
      id
      status
      totalPrice
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private apollo: Apollo) {}

  quotePrice(sitterId: string, startDate: string, endDate: string, services: string[]): Observable<any> {
    return this.apollo.mutate({
      mutation: QUOTE_PRICE,
      variables: { sitterId, startDate, endDate, services }
    });
  }

  requestBooking(sitterId: string, startDate: string, endDate: string, services: string[], petIds: string[]): Observable<any> {
    return this.apollo.mutate({
      mutation: REQUEST_BOOKING,
      variables: { sitterId, startDate, endDate, services, petIds }
    });
  }
}