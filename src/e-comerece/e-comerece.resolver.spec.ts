import { Test, TestingModule } from '@nestjs/testing';
import { EComereceResolver } from './e-comerece.resolver';
import { EComereceService } from './e-comerece.service';

describe('EComereceResolver', () => {
  let resolver: EComereceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EComereceResolver, EComereceService],
    }).compile();

    resolver = module.get<EComereceResolver>(EComereceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
