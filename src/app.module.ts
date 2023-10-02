import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenomModule } from './venom/venom.module';

@Module({
  imports: [VenomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
