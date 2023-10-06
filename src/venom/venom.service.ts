import { Injectable } from '@nestjs/common';
import { fileURLToPath, URL } from 'url';
import { create, Whatsapp, } from 'venom-bot';

@Injectable()
export class VenomService {
  private client: Whatsapp;
  constructor() {
    this.initialize();
  }

  private initialize() {
    const start = (client: Whatsapp) => {
      this.client = client;
    };

    create({ session: 'pilot' })
      .then((client) => start(client))
      .catch((err) => console.error(err.message));
  }

  async getAllChatsContacts() {
    return await this.client.getAllChatsContacts();

  }

  async getAllMessagesInChat(id: string) {
    const chatId = id + "@c.us"
    await this.client.loadAndGetAllMessagesInChat(chatId, true, true)
    const data = await this.client.getAllMessagesInChat(chatId, true, false);

    return data
  }

  async sendText(phone: string, message: string) {
    const to = phone + '@c.us';
    const body = message;

    this.client.sendText(to, body);
  }

  async sendImage(body: any) {

    const to = body.phone + "@c.us"
    const filePath = body.image
    const filename = "thumb"
    const caption = body.message


    await this.client.sendImage(to, filePath, filename, caption)
  }
}
