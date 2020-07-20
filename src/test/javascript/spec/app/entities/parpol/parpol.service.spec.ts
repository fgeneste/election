import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { ParpolService } from 'app/entities/parpol/parpol.service';
import { IParpol, Parpol } from 'app/shared/model/parpol.model';

describe('Service Tests', () => {
  describe('Parpol Service', () => {
    let injector: TestBed;
    let service: ParpolService;
    let httpMock: HttpTestingController;
    let elemDefault: IParpol;
    let expectedResult: IParpol | IParpol[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ParpolService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Parpol(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            orgdatfin: currentDate.format(DATE_FORMAT),
            syscredat: currentDate.format(DATE_FORMAT),
            sysmajdat: currentDate.format(DATE_FORMAT),
            orgdatcre: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Parpol', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            orgdatfin: currentDate.format(DATE_FORMAT),
            syscredat: currentDate.format(DATE_FORMAT),
            sysmajdat: currentDate.format(DATE_FORMAT),
            orgdatcre: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            orgdatfin: currentDate,
            syscredat: currentDate,
            sysmajdat: currentDate,
            orgdatcre: currentDate,
          },
          returnedFromService
        );

        service.create(new Parpol()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Parpol', () => {
        const returnedFromService = Object.assign(
          {
            tenpolcod: 'BBBBBB',
            orgcod: 'BBBBBB',
            typparpolcod: 'BBBBBB',
            typorgcod: 'BBBBBB',
            eveobs: 'BBBBBB',
            orgart: 'BBBBBB',
            orgnumtri: 1,
            orgdatfin: currentDate.format(DATE_FORMAT),
            orgnumtie: 'BBBBBB',
            orgurlsim: 'BBBBBB',
            orgurlcmp: 'BBBBBB',
            orgtemannu: 'BBBBBB',
            evetempub: 'BBBBBB',
            syscredat: currentDate.format(DATE_FORMAT),
            syscrelog: 'BBBBBB',
            sysmajdat: currentDate.format(DATE_FORMAT),
            sysmajlog: 'BBBBBB',
            evelil: 'BBBBBB',
            evelib: 'BBBBBB',
            evelic: 'BBBBBB',
            temvalcod: 'BBBBBB',
            orgdatcre: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            orgdatfin: currentDate,
            syscredat: currentDate,
            sysmajdat: currentDate,
            orgdatcre: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Parpol', () => {
        const returnedFromService = Object.assign(
          {
            tenpolcod: 'BBBBBB',
            orgcod: 'BBBBBB',
            typparpolcod: 'BBBBBB',
            typorgcod: 'BBBBBB',
            eveobs: 'BBBBBB',
            orgart: 'BBBBBB',
            orgnumtri: 1,
            orgdatfin: currentDate.format(DATE_FORMAT),
            orgnumtie: 'BBBBBB',
            orgurlsim: 'BBBBBB',
            orgurlcmp: 'BBBBBB',
            orgtemannu: 'BBBBBB',
            evetempub: 'BBBBBB',
            syscredat: currentDate.format(DATE_FORMAT),
            syscrelog: 'BBBBBB',
            sysmajdat: currentDate.format(DATE_FORMAT),
            sysmajlog: 'BBBBBB',
            evelil: 'BBBBBB',
            evelib: 'BBBBBB',
            evelic: 'BBBBBB',
            temvalcod: 'BBBBBB',
            orgdatcre: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            orgdatfin: currentDate,
            syscredat: currentDate,
            sysmajdat: currentDate,
            orgdatcre: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Parpol', () => {
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
