import { Module } from '@nestjs/common';
import { VenomService } from './venom.service';
import { VenomController } from './venom.controller';

@Module({
  controllers: [VenomController],
  providers: [VenomService],
})
export class VenomModule {}
