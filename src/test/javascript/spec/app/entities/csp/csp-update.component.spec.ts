import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { CspUpdateComponent } from 'app/entities/csp/csp-update.component';
import { CspService } from 'app/entities/csp/csp.service';
import { Csp } from 'app/shared/model/csp.model';

describe('Component Tests', () => {
  describe('Csp Management Update Component', () => {
    let comp: CspUpdateComponent;
    let fixture: ComponentFixture<CspUpdateComponent>;
    let service: CspService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [CspUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CspUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CspUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CspService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Csp(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Csp();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
