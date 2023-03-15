import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { FakeValueService } from './fake-value.service';
import { TestBed } from '@angular/core/testing';

describe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const valueServiceSpyObj = jasmine.createSpyObj('ValueService', [
      'getValue',
    ]);
    TestBed.configureTestingModule({
      providers: [
        MasterService,
        {
          provide: ValueService,
          useValue: valueServiceSpyObj,
        },
      ],
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(
      ValueService
    ) as jasmine.SpyObj<ValueService>;
  });

  it('should be create', () => {
    expect(masterService).toBeTruthy();
  });

  // it('should return "my value" from the real service', () => {
  //   let valueService = new ValueService();
  //   let masterService = new MasterService(valueService);
  //   expect(masterService.getValue()).toBe('my value');
  // });

  // it('should return "fake value" from the fake service', () => {
  //   let fakeValueService = new FakeValueService();
  //   let masterService = new MasterService(fakeValueService as ValueService);
  //   expect(masterService.getValue()).toBe('fake value');
  // });

  // it('should return "fake from object" from the fake object', () => {
  //   let fake = { getValue: () => 'fake from object' };
  //   let masterService = new MasterService(fake as ValueService);
  //   expect(masterService.getValue()).toBe('fake from object');
  // });

  it('should call to getValue from ValueService', () => {
    valueServiceSpy.getValue.and.returnValue('fake value');
    expect(masterService.getValue()).toBe('fake value');
    expect(valueServiceSpy.getValue).toHaveBeenCalled(); //Si fue llamado
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1); //Si fue llamado 1 vez
  });
});
