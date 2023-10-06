import { Body, Controller, Get, Post, Request, Param } from '@nestjs/common';
import { VenomService } from './venom.service';

@Controller('venom')
export class VenomController {
  constructor(private readonly venomService: VenomService) { }

  @Get('/allchatscontacts')
  async getAllChatsContacts() {
    return await this.venomService.getAllChatsContacts();
  }

  @Get('/allchatmessages/:id')
  async getAllMessagesInChat(@Param('id') id: string) {
    return await this.venomService.getAllMessagesInChat(id);
  }

  @Post('/send/:phone')
  async sendMessage(@Param('phone') phone: string, @Body() body: any) {

    await this.venomService.sendText(phone, body.message);

    return { message: "enviado" }
  }

  @Post('/sendimage/')
  async sendImage(@Body() body: any) {

    await this.venomService.sendImage(body)


    return { message: "enviado" }
  }
}
