import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { CandidatService } from 'app/entities/candidat/candidat.service';
import { ICandidat, Candidat } from 'app/shared/model/candidat.model';
import { Sexe } from 'app/shared/model/enumerations/sexe.model';

describe('Service Tests', () => {
  describe('Candidat Service', () => {
    let injector: TestBed;
    let service: CandidatService;
    let httpMock: HttpTestingController;
    let elemDefault: ICandidat;
    let expectedResult: ICandidat | ICandidat[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(CandidatService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Candidat(
        0,
        'AAAAAAA',
        0,
        0,
        'AAAAAAA',
        0,
        Sexe.M,
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        false,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        false
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateNaissance: currentDate.format(DATE_FORMAT),
            dateNaissanceSupp: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Candidat', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateNaissance: currentDate.format(DATE_FORMAT),
            dateNaissanceSupp: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateNaissance: currentDate,
            dateNaissanceSupp: currentDate,
          },
          returnedFromService
        );

        service.create(new Candidat()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Candidat', () => {
        const returnedFromService = Object.assign(
          {
            libelleDepartement: 'BBBBBB',
            numeroDepot: 1,
            numeroDepotListe: 1,
            libelleListe: 'BBBBBB',
            noOrdreListe: 1,
            sexe: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            dateNaissance: currentDate.format(DATE_FORMAT),
            nuance: 'BBBBBB',
            profession: 'BBBBBB',
            personnalite: 'BBBBBB',
            sortant: true,
            sexeSupp: 'BBBBBB',
            nomSupp: 'BBBBBB',
            prenomSupp: 'BBBBBB',
            dateNaissanceSupp: currentDate.format(DATE_FORMAT),
            isElu: true,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateNaissance: currentDate,
            dateNaissanceSupp: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Candidat', () => {
        const returnedFromService = Object.assign(
          {
            libelleDepartement: 'BBBBBB',
            numeroDepot: 1,
            numeroDepotListe: 1,
            libelleListe: 'BBBBBB',
            noOrdreListe: 1,
            sexe: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            dateNaissance: currentDate.format(DATE_FORMAT),
            nuance: 'BBBBBB',
            profession: 'BBBBBB',
            personnalite: 'BBBBBB',
            sortant: true,
            sexeSupp: 'BBBBBB',
            nomSupp: 'BBBBBB',
            prenomSupp: 'BBBBBB',
            dateNaissanceSupp: currentDate.format(DATE_FORMAT),
            isElu: true,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateNaissance: currentDate,
            dateNaissanceSupp: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Candidat', () => {
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
