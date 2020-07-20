import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { ResultatService } from 'app/entities/resultat/resultat.service';
import { IResultat, Resultat } from 'app/shared/model/resultat.model';

describe('Service Tests', () => {
  describe('Resultat Service', () => {
    let injector: TestBed;
    let service: ResultatService;
    let httpMock: HttpTestingController;
    let elemDefault: IResultat;
    let expectedResult: IResultat | IResultat[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ResultatService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Resultat(0, currentDate, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateExport: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Resultat', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateExport: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateExport: currentDate,
          },
          returnedFromService
        );

        service.create(new Resultat()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Resultat', () => {
        const returnedFromService = Object.assign(
          {
            dateExport: currentDate.format(DATE_FORMAT),
            numeroDepartement: 'BBBBBB',
            libelleDepartement: 'BBBBBB',
            noTour: 'BBBBBB',
            inscrits: 1,
            abstentions: 1,
            absOnIns: 1,
            votants: 1,
            votOnIns: 1,
            blancs: 1,
            blancsOnIns: 1,
            blancsOnVot: 1,
            nuls: 1,
            nulsOnIns: 1,
            nulsOnVot: 1,
            exprime: 1,
            expOnIns: 1,
            expOnVot: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateExport: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Resultat', () => {
        const returnedFromService = Object.assign(
          {
            dateExport: currentDate.format(DATE_FORMAT),
            numeroDepartement: 'BBBBBB',
            libelleDepartement: 'BBBBBB',
            noTour: 'BBBBBB',
            inscrits: 1,
            abstentions: 1,
            absOnIns: 1,
            votants: 1,
            votOnIns: 1,
            blancs: 1,
            blancsOnIns: 1,
            blancsOnVot: 1,
            nuls: 1,
            nulsOnIns: 1,
            nulsOnVot: 1,
            exprime: 1,
            expOnIns: 1,
            expOnVot: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateExport: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Resultat', () => {
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
