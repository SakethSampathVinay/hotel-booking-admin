import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  booking_summary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/booking-summary`);
  }

  dashboard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }
}
