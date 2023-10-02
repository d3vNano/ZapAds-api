import { Test, TestingModule } from '@nestjs/testing';
import { VenomController } from './venom.controller';
import { VenomService } from './venom.service';

describe('VenomController', () => {
  let controller: VenomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenomController],
      providers: [VenomService],
    }).compile();

    controller = module.get<VenomController>(VenomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
