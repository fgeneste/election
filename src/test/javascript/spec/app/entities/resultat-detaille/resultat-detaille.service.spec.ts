import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ResultatDetailleService } from 'app/entities/resultat-detaille/resultat-detaille.service';
import { IResultatDetaille, ResultatDetaille } from 'app/shared/model/resultat-detaille.model';
import { Sexe } from 'app/shared/model/enumerations/sexe.model';

describe('Service Tests', () => {
  describe('ResultatDetaille Service', () => {
    let injector: TestBed;
    let service: ResultatDetailleService;
    let httpMock: HttpTestingController;
    let elemDefault: IResultatDetaille;
    let expectedResult: IResultatDetaille | IResultatDetaille[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ResultatDetailleService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new ResultatDetaille(
        0,
        'AAAAAAA',
        Sexe.M,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        0,
        0,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a ResultatDetaille', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new ResultatDetaille()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a ResultatDetaille', () => {
        const returnedFromService = Object.assign(
          {
            noDepot: 'BBBBBB',
            sexe: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            nuance: 'BBBBBB',
            resultatCandidat: 'BBBBBB',
            nuanceListe: 'BBBBBB',
            libelleListe: 'BBBBBB',
            teteListe: 'BBBBBB',
            voix: 1,
            voixOnIns: 1,
            voixOnExp: 1,
            sieges: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of ResultatDetaille', () => {
        const returnedFromService = Object.assign(
          {
            noDepot: 'BBBBBB',
            sexe: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            nuance: 'BBBBBB',
            resultatCandidat: 'BBBBBB',
            nuanceListe: 'BBBBBB',
            libelleListe: 'BBBBBB',
            teteListe: 'BBBBBB',
            voix: 1,
            voixOnIns: 1,
            voixOnExp: 1,
            sieges: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a ResultatDetaille', () => {
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
