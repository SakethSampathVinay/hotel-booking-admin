import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  total_bookings: number = 0;
  total_amount: number = 0;

  bookings_list: any[] = [];

  constructor(private dashboard: AdminServiceService) {}

  ngOnInit(): void {
    this.dashboard.booking_summary().subscribe((data) => {
      this.total_bookings = data.total_bookings;
      this.total_amount = data.total_amount;
    });

    this.dashboard.dashboard().subscribe((data) => {
      this.bookings_list = data;
    });
  }
}
