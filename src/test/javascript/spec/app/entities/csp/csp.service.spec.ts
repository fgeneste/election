import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { CspService } from 'app/entities/csp/csp.service';
import { ICsp, Csp } from 'app/shared/model/csp.model';

describe('Service Tests', () => {
  describe('Csp Service', () => {
    let injector: TestBed;
    let service: CspService;
    let httpMock: HttpTestingController;
    let elemDefault: ICsp;
    let expectedResult: ICsp | ICsp[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(CspService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Csp(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0, currentDate, 'AAAAAAA', currentDate, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            syscredat: currentDate.format(DATE_FORMAT),
            sysmajdat: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Csp', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            syscredat: currentDate.format(DATE_FORMAT),
            sysmajdat: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            syscredat: currentDate,
            sysmajdat: currentDate,
          },
          returnedFromService
        );

        service.create(new Csp()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Csp', () => {
        const returnedFromService = Object.assign(
          {
            cspcod: 'BBBBBB',
            catprocod: 'BBBBBB',
            cspfamcod: 'BBBBBB',
            csplib: 'BBBBBB',
            cspnumtri: 1,
            syscredat: currentDate.format(DATE_FORMAT),
            syscrelog: 'BBBBBB',
            sysmajdat: currentDate.format(DATE_FORMAT),
            sysmajlog: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            syscredat: currentDate,
            sysmajdat: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Csp', () => {
        const returnedFromService = Object.assign(
          {
            cspcod: 'BBBBBB',
            catprocod: 'BBBBBB',
            cspfamcod: 'BBBBBB',
            csplib: 'BBBBBB',
            cspnumtri: 1,
            syscredat: currentDate.format(DATE_FORMAT),
            syscrelog: 'BBBBBB',
            sysmajdat: currentDate.format(DATE_FORMAT),
            sysmajlog: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            syscredat: currentDate,
            sysmajdat: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Csp', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
