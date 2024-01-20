import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  id: number;
  img_src: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Книга 1',
      subject: 'Книги',
      id: 0,
      img_src: '/assets/images/1.jpeg',
    },
    {
      fromName: 'Книга 2',
      subject: 'Книги',
      id: 1,
      img_src: '/assets/images/2.jpeg',
    },
    {
      fromName: 'Книга 3',
      subject: 'Книги',
      id: 2,
      img_src: '/assets/images/3.jpeg',
    }, 
    {
      fromName: 'Книга 4',
      subject: 'Книги',
      id: 2,
      img_src: '/assets/images/3.jpeg',
    },
    {
      fromName: 'Книга 5',
      subject: 'Книги',
      id: 2,
      img_src: '/assets/images/3.jpeg',
    },
    {
      fromName: 'Книга 6',
      subject: 'Книги',
      id: 2,
      img_src: '/assets/images/3.jpeg',
    },
    {
      fromName: 'Книга 7',
      subject: 'Книги',
      id: 2,
      img_src: '/assets/images/3.jpeg',
    },
    {
      fromName: 'Книга 8',
      subject: 'Книги',
      id: 2,
      img_src: '/assets/images/3.jpeg',
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
