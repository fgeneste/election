import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { SenService } from 'app/entities/sen/sen.service';
import { ISen, Sen } from 'app/shared/model/sen.model';

describe('Service Tests', () => {
  describe('Sen Service', () => {
    let injector: TestBed;
    let service: SenService;
    let httpMock: HttpTestingController;
    let elemDefault: ISen;
    let expectedResult: ISen | ISen[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(SenService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Sen(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
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
        0,
        'AAAAAAA',
        'AAAAAAA',
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
        currentDate,
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        'AAAAAAA',
        'AAAAAAA',
        0,
        0,
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            sendatnai: currentDate.format(DATE_FORMAT),
            sendatdec: currentDate.format(DATE_FORMAT),
            sendatpreele: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Sen', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            sendatnai: currentDate.format(DATE_FORMAT),
            sendatdec: currentDate.format(DATE_FORMAT),
            sendatpreele: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            sendatnai: currentDate,
            sendatdec: currentDate,
            sendatpreele: currentDate,
          },
          returnedFromService
        );

        service.create(new Sen()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Sen', () => {
        const returnedFromService = Object.assign(
          {
            senmat: 'BBBBBB',
            quacod: 'BBBBBB',
            sennomuse: 'BBBBBB',
            sennompat: 'BBBBBB',
            sennommar: 'BBBBBB',
            sennomtec: 'BBBBBB',
            senprenomuse: 'BBBBBB',
            senprenomciv: 'BBBBBB',
            sendatnai: currentDate.format(DATE_FORMAT),
            senlienai: 'BBBBBB',
            sendatdec: currentDate.format(DATE_FORMAT),
            etasencod: 'BBBBBB',
            sendespro: 'BBBBBB',
            pcscod: 'BBBBBB',
            catprocod: 'BBBBBB',
            senrngprt: 1,
            sengrppolcodcou: 'BBBBBB',
            sengrppolliccou: 'BBBBBB',
            sentypappcou: 'BBBBBB',
            sencomcodcou: 'BBBBBB',
            sencomliccou: 'BBBBBB',
            sencirnumcou: 1,
            sencircou: 'BBBBBB',
            senburliccou: 'BBBBBB',
            senema: 'BBBBBB',
            sennumtelsen: 'BBBBBB',
            sendiplome: 'BBBBBB',
            sendecora: 'BBBBBB',
            sendatpreele: currentDate.format(DATE_TIME_FORMAT),
            indid: 1,
            sennomusecap: 'BBBBBB',
            senpagper: 'BBBBBB',
            senrngprtcod: 'BBBBBB',
            parpolorgcod: 'BBBBBB',
            senliedec: 'BBBBBB',
            sendptnumnai: 1,
            sendptnumdec: 1,
            senauttra: 'BBBBBB',
            senlog: 'BBBBBB',
            sencrinom: 'BBBBBB',
            senfem: 'BBBBBB',
            senautema: 'BBBBBB',
            senautgrpsen: 'BBBBBB',
            senautpagper: 'BBBBBB',
            sennbrque: 1,
            sennomdis: 'BBBBBB',
            numsen: 'BBBBBB',
            sennumsie: 1,
            sennbrvid: 1,
            sennomdit: 'BBBBBB',
            titnobcod: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            sendatnai: currentDate,
            sendatdec: currentDate,
            sendatpreele: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Sen', () => {
        const returnedFromService = Object.assign(
          {
            senmat: 'BBBBBB',
            quacod: 'BBBBBB',
            sennomuse: 'BBBBBB',
            sennompat: 'BBBBBB',
            sennommar: 'BBBBBB',
            sennomtec: 'BBBBBB',
            senprenomuse: 'BBBBBB',
            senprenomciv: 'BBBBBB',
            sendatnai: currentDate.format(DATE_FORMAT),
            senlienai: 'BBBBBB',
            sendatdec: currentDate.format(DATE_FORMAT),
            etasencod: 'BBBBBB',
            sendespro: 'BBBBBB',
            pcscod: 'BBBBBB',
            catprocod: 'BBBBBB',
            senrngprt: 1,
            sengrppolcodcou: 'BBBBBB',
            sengrppolliccou: 'BBBBBB',
            sentypappcou: 'BBBBBB',
            sencomcodcou: 'BBBBBB',
            sencomliccou: 'BBBBBB',
            sencirnumcou: 1,
            sencircou: 'BBBBBB',
            senburliccou: 'BBBBBB',
            senema: 'BBBBBB',
            sennumtelsen: 'BBBBBB',
            sendiplome: 'BBBBBB',
            sendecora: 'BBBBBB',
            sendatpreele: currentDate.format(DATE_TIME_FORMAT),
            indid: 1,
            sennomusecap: 'BBBBBB',
            senpagper: 'BBBBBB',
            senrngprtcod: 'BBBBBB',
            parpolorgcod: 'BBBBBB',
            senliedec: 'BBBBBB',
            sendptnumnai: 1,
            sendptnumdec: 1,
            senauttra: 'BBBBBB',
            senlog: 'BBBBBB',
            sencrinom: 'BBBBBB',
            senfem: 'BBBBBB',
            senautema: 'BBBBBB',
            senautgrpsen: 'BBBBBB',
            senautpagper: 'BBBBBB',
            sennbrque: 1,
            sennomdis: 'BBBBBB',
            numsen: 'BBBBBB',
            sennumsie: 1,
            sennbrvid: 1,
            sennomdit: 'BBBBBB',
            titnobcod: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            sendatnai: currentDate,
            sendatdec: currentDate,
            sendatpreele: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Sen', () => {
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
