import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-room',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-room.component.html',
  styleUrl: './list-room.component.css',
})
export class ListRoomComponent {
  constructor(private listRoom: AdminServiceService) {}

  listData: any[] = [];

  ngOnInit() {
    this.hostelListing();
  }

  hostelListing() {
    this.listRoom.hotelsListing().subscribe((data) => {
      this.listData = data as any[];
    });
    console.log(this.listData);
  }

  deleteHotel(id: number) {
    this.listRoom.deleteHotel(id).subscribe(() => {
      console.log('Hotel Deleted Successfully');
      this.hostelListing();
    });
  }
}
