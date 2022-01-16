import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Donation } from '../common/donation';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private baseUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getDonationById(id: string): Observable<Donation> {
    const url = `${this.baseUrl}/donations/${id}`;

    return this.httpClient.get<Donation>(url).pipe(
      catchError(this.handleError<Donation>(`getDonation id=${id}`))
    );
  }

  getDonations(): Observable<Donation[]> {
    const url = `${this.baseUrl}/donations`;

    return this.httpClient.get<Donation[]>(url).pipe(
      catchError(this.handleError<Donation[]>('getDonations', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
}
