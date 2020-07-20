import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { DptService } from 'app/entities/dpt/dpt.service';
import { IDpt, Dpt } from 'app/shared/model/dpt.model';

describe('Service Tests', () => {
  describe('Dpt Service', () => {
    let injector: TestBed;
    let service: DptService;
    let httpMock: HttpTestingController;
    let elemDefault: IDpt;
    let expectedResult: IDpt | IDpt[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DptService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Dpt(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        currentDate,
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dptdatdeb: currentDate.format(DATE_FORMAT),
            dptdatfin: currentDate.format(DATE_FORMAT),
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

      it('should create a Dpt', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dptdatdeb: currentDate.format(DATE_FORMAT),
            dptdatfin: currentDate.format(DATE_FORMAT),
            syscredat: currentDate.format(DATE_FORMAT),
            sysmajdat: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dptdatdeb: currentDate,
            dptdatfin: currentDate,
            syscredat: currentDate,
            sysmajdat: currentDate,
          },
          returnedFromService
        );

        service.create(new Dpt()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Dpt', () => {
        const returnedFromService = Object.assign(
          {
            dptnum: 'BBBBBB',
            dptcod: 'BBBBBB',
            dptlib: 'BBBBBB',
            dptnbrsen: 1,
            dptmodscrsen: 'BBBBBB',
            dptser: 'BBBBBB',
            regcod: 'BBBBBB',
            dptnumtri: 1,
            dptcodsirpas: 'BBBBBB',
            dptlic: 'BBBBBB',
            dptart: 'BBBBBB',
            dptlibtri: 'BBBBBB',
            temvalcod: 'BBBBBB',
            evelic: 'BBBBBB',
            evelib: 'BBBBBB',
            evelil: 'BBBBBB',
            eveobs: 'BBBBBB',
            dptser2004: 'BBBBBB',
            dptcmt: 'BBBBBB',
            dptcmtaff: 'BBBBBB',
            dptdatdeb: currentDate.format(DATE_FORMAT),
            dptdatfin: currentDate.format(DATE_FORMAT),
            evetempub: 'BBBBBB',
            dpturlcmp: 'BBBBBB',
            dptminintcod: 'BBBBBB',
            syscredat: currentDate.format(DATE_FORMAT),
            syscrelog: 'BBBBBB',
            sysmajdat: currentDate.format(DATE_FORMAT),
            sysmajlog: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dptdatdeb: currentDate,
            dptdatfin: currentDate,
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

      it('should return a list of Dpt', () => {
        const returnedFromService = Object.assign(
          {
            dptnum: 'BBBBBB',
            dptcod: 'BBBBBB',
            dptlib: 'BBBBBB',
            dptnbrsen: 1,
            dptmodscrsen: 'BBBBBB',
            dptser: 'BBBBBB',
            regcod: 'BBBBBB',
            dptnumtri: 1,
            dptcodsirpas: 'BBBBBB',
            dptlic: 'BBBBBB',
            dptart: 'BBBBBB',
            dptlibtri: 'BBBBBB',
            temvalcod: 'BBBBBB',
            evelic: 'BBBBBB',
            evelib: 'BBBBBB',
            evelil: 'BBBBBB',
            eveobs: 'BBBBBB',
            dptser2004: 'BBBBBB',
            dptcmt: 'BBBBBB',
            dptcmtaff: 'BBBBBB',
            dptdatdeb: currentDate.format(DATE_FORMAT),
            dptdatfin: currentDate.format(DATE_FORMAT),
            evetempub: 'BBBBBB',
            dpturlcmp: 'BBBBBB',
            dptminintcod: 'BBBBBB',
            syscredat: currentDate.format(DATE_FORMAT),
            syscrelog: 'BBBBBB',
            sysmajdat: currentDate.format(DATE_FORMAT),
            sysmajlog: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dptdatdeb: currentDate,
            dptdatfin: currentDate,
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

      it('should delete a Dpt', () => {
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
