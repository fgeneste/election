import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ElectionvueTestModule } from '../../../test.module';
import { ResultatDetailleComponent } from 'app/entities/resultat-detaille/resultat-detaille.component';
import { ResultatDetailleService } from 'app/entities/resultat-detaille/resultat-detaille.service';
import { ResultatDetaille } from 'app/shared/model/resultat-detaille.model';

describe('Component Tests', () => {
  describe('ResultatDetaille Management Component', () => {
    let comp: ResultatDetailleComponent;
    let fixture: ComponentFixture<ResultatDetailleComponent>;
    let service: ResultatDetailleService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [ResultatDetailleComponent],
      })
        .overrideTemplate(ResultatDetailleComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ResultatDetailleComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ResultatDetailleService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new ResultatDetaille(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.resultatDetailles && comp.resultatDetailles[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
