import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ListRoomComponent } from './list-room/list-room.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'add-rooms', component: AddRoomComponent},
    {path: 'hotel-list', component: ListRoomComponent},
];
