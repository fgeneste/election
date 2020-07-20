import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { ResultatDetailleUpdateComponent } from 'app/entities/resultat-detaille/resultat-detaille-update.component';
import { ResultatDetailleService } from 'app/entities/resultat-detaille/resultat-detaille.service';
import { ResultatDetaille } from 'app/shared/model/resultat-detaille.model';

describe('Component Tests', () => {
  describe('ResultatDetaille Management Update Component', () => {
    let comp: ResultatDetailleUpdateComponent;
    let fixture: ComponentFixture<ResultatDetailleUpdateComponent>;
    let service: ResultatDetailleService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [ResultatDetailleUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ResultatDetailleUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ResultatDetailleUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ResultatDetailleService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ResultatDetaille(123);
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
        const entity = new ResultatDetaille();
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
