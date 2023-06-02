import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from './environment';
import { NotificationReceiverComponent } from './notification-receiver/notification-receiver.component';
import { RouterModule } from '@angular/router'; // Importe o RouterModule aqui
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NotificationReceiverComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }