import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { VenomService } from './venom.service';

@Controller('venom')
export class VenomController {
  constructor(private readonly venomService: VenomService) {}

  @Get('/test')
  async allContacts() {
    return await this.venomService.getContacts();
  }

  @Post('/send')
  async sendMessage(@Request() req: any, @Body() body: any) {
    await this.venomService.sendText(body.phone, body.text);
  }
}
