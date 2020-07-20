import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { ParpolUpdateComponent } from 'app/entities/parpol/parpol-update.component';
import { ParpolService } from 'app/entities/parpol/parpol.service';
import { Parpol } from 'app/shared/model/parpol.model';

describe('Component Tests', () => {
  describe('Parpol Management Update Component', () => {
    let comp: ParpolUpdateComponent;
    let fixture: ComponentFixture<ParpolUpdateComponent>;
    let service: ParpolService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [ParpolUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ParpolUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ParpolUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ParpolService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Parpol(123);
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
        const entity = new Parpol();
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
