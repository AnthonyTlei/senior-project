import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { io } from 'socket.io-client';
import {Message} from '../../models/Message'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('scroll') private chat: ElementRef;

  username:string = '';

  socket: any;

  message: Message = new Message();

  messages: Message[] = [];

  constructor(private cookie : CookieService) 
  { 
    
  }

  ngOnInit(): void {

    this.username = this.cookie.get('username');
    this.message.content = '';
    this.message.type = 'user';
    this.message.author = this.username;

    this.setupSocketConnection();
  }

  setupSocketConnection() {

    this.socket = io('localhost:3000');

    this.socket.emit('user-joined', this.username);

    this.socket.on('chat-message', (data: Message) => {
      if (data) {

        let msg = new Message();
        msg.content = data.content;
        msg.type = data.type;
        msg.author = data.author;

        this.messages.push(msg);
        this.scrollToBottom();
      }
    });

    this.socket.on('message', (data: Message) => {
      if (data) {

        let msg = new Message();
        msg.author = data.author;
        msg.content = data.content;
        msg.type = data.type;

        this.messages.push(msg);
        this.scrollToBottom();
      }
    });

  }

  SendMessage() {
    this.socket.emit('chat-message', this.message);

    let newMsg = new Message();
    newMsg.content = this.message.content;
    newMsg.type = 'user';
    newMsg.author = this.username;

    this.messages.push(newMsg);
    this.message.content = '';
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight;
  }

}
