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

  addHotels(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-hotels`, formData);
  }

  hotelsListing() {
    return this.http.get(`${this.apiUrl}/hotels-listing`);
  }

  deleteHotel(id: number) {
    return this.http.delete(`${this.apiUrl}/delete-hotel/${id}`);
  }
}
