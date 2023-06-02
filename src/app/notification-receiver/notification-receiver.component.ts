import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging, AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-notification-receiver',
  templateUrl: './notification-receiver.component.html',
  styleUrls: ['./notification-receiver.component.css']
})
export class NotificationReceiverComponent {
  receivedMessages: any[] = [];

  constructor(private afMessaging: AngularFireMessaging) { }

  ngOnInit(): void {
    this.requestPermission();
    this.receiveMessages();
  }

  requestPermission(): void {
    this.afMessaging.requestPermission
      .subscribe(
        () => {
          this.afMessaging.getToken
          .pipe(take(1))
          .subscribe(
            (token) => {
              console.log("Permissão concedida   "+token)
            },
            (error) => {
              console.error('Erro ao obter o token do FCM:', error);
            }
          );
        },
        error => {
          console.error('Erro ao solicitar permissão para receber notificações', error);
        }
      );
  }

  receiveMessages(): void {
    this.afMessaging.messages
      .subscribe((message) => {
        console.log('Nova notificação recebida:', message);
        this.receivedMessages.push(message); // Adiciona a mensagem à lista de mensagens recebidas
        // Exiba a mensagem para o usuário ou atualize os dados da aplicação
      });
  }

  

}
