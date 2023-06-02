import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationReceiverComponent } from './notification-receiver/notification-receiver.component';


const routes: Routes = [
  { path: '', component: NotificationReceiverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }