import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ElectionvueTestModule } from '../../../test.module';
import { ParpolComponent } from 'app/entities/parpol/parpol.component';
import { ParpolService } from 'app/entities/parpol/parpol.service';
import { Parpol } from 'app/shared/model/parpol.model';

describe('Component Tests', () => {
  describe('Parpol Management Component', () => {
    let comp: ParpolComponent;
    let fixture: ComponentFixture<ParpolComponent>;
    let service: ParpolService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [ParpolComponent],
      })
        .overrideTemplate(ParpolComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ParpolComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ParpolService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Parpol(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.parpols && comp.parpols[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
