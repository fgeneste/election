import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ElectionvueTestModule } from '../../../test.module';
import { DptComponent } from 'app/entities/dpt/dpt.component';
import { DptService } from 'app/entities/dpt/dpt.service';
import { Dpt } from 'app/shared/model/dpt.model';

describe('Component Tests', () => {
  describe('Dpt Management Component', () => {
    let comp: DptComponent;
    let fixture: ComponentFixture<DptComponent>;
    let service: DptService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [DptComponent],
      })
        .overrideTemplate(DptComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DptComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DptService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Dpt(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dpts && comp.dpts[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
