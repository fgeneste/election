import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ElectionvueTestModule } from '../../../test.module';
import { FoncandidComponent } from 'app/entities/foncandid/foncandid.component';
import { FoncandidService } from 'app/entities/foncandid/foncandid.service';
import { Foncandid } from 'app/shared/model/foncandid.model';

describe('Component Tests', () => {
  describe('Foncandid Management Component', () => {
    let comp: FoncandidComponent;
    let fixture: ComponentFixture<FoncandidComponent>;
    let service: FoncandidService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [FoncandidComponent],
      })
        .overrideTemplate(FoncandidComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(FoncandidComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(FoncandidService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Foncandid(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.foncandids && comp.foncandids[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
