import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { DptUpdateComponent } from 'app/entities/dpt/dpt-update.component';
import { DptService } from 'app/entities/dpt/dpt.service';
import { Dpt } from 'app/shared/model/dpt.model';

describe('Component Tests', () => {
  describe('Dpt Management Update Component', () => {
    let comp: DptUpdateComponent;
    let fixture: ComponentFixture<DptUpdateComponent>;
    let service: DptService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [DptUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DptUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DptUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DptService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Dpt(123);
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
        const entity = new Dpt();
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
