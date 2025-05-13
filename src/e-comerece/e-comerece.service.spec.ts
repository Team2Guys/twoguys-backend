import { Test, TestingModule } from '@nestjs/testing';
import { EComereceService } from './e-comerece.service';

describe('EComereceService', () => {
  let service: EComereceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EComereceService],
    }).compile();

    service = module.get<EComereceService>(EComereceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
