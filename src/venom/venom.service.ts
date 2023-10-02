import { Injectable } from '@nestjs/common';
import { create, Whatsapp } from 'venom-bot';

@Injectable()
export class VenomService {
  private client: Whatsapp;
  constructor() {
    this.initialize();
  }

  async getContacts() {
    //tras todos os chats incluindo grupos
    const t1 = await this.client.getAllChats();
    const t2 = await this.client.getAllChatsContacts();
    const t3 = await this.client.getAllContacts();

    console.log(t1);
    return t1;
  }

  async sendText(phone: string, text: string) {
    const to = phone + '@c.us';
    const body = text;

    this.client.sendText(to, body);
  }

  private initialize() {
    const start = (client: Whatsapp) => {
      this.client = client;
    };

    create({ session: 'pilot' })
      .then((client) => start(client))
      .catch((err) => console.error(err.message));
  }
}
