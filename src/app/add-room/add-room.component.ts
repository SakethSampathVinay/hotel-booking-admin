import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css',
})
export class AddRoomComponent {
  constructor(private addHotel: AdminServiceService) {}

  previewImages: string[] = [];
  selectedFiles: File[] = [];

  allAmenities: string[] = [
    'Free WiFi',
    'Free Breakfast',
    'Room Service',
    'Mountain View',
    'Pool Access',
  ];

  formData: any = {
    hotelName: '',
    streetAddress: '',
    roomType: '',
    pricePerNight: 0,
    amenities: [],
  };

  onImageSelected(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFiles[index] = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImages[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleAmenity(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.formData.amenities.push(value);
    } else {
      this.formData.amenities = this.formData.amenities.filter(
        (a: string) => a !== value
      );
    }
  }

  addHotels() {
    const formDataToSend = new FormData();

    this.selectedFiles.forEach((file) => formDataToSend.append('images', file));
    formDataToSend.append('hotel_name', this.formData.hotelName);
    formDataToSend.append('street_address', this.formData.streetAddress);
    formDataToSend.append('hotel_type', this.formData.roomType);
    formDataToSend.append(
      'price_per_night',
      this.formData.pricePerNight.toString()
    );

    this.formData.amenities.forEach((a: string) =>
      formDataToSend.append('amenities', a)
    );

    this.addHotel.addHotels(formDataToSend).subscribe({
      next: (res) => {
        console.log('Room added:', res);
        // Reset form
        this.formData = {
          hotelName: '',
          streetAddress: '',
          roomType: '',
          pricePerNight: 0,
          amenities: [],
        };
        this.previewImages = [];
        this.selectedFiles = [];
      },
      error: (err) => {
        console.error('Upload failed:', err);
      },
    });
  }
}
