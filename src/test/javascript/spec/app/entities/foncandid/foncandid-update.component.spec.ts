import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { FoncandidUpdateComponent } from 'app/entities/foncandid/foncandid-update.component';
import { FoncandidService } from 'app/entities/foncandid/foncandid.service';
import { Foncandid } from 'app/shared/model/foncandid.model';

describe('Component Tests', () => {
  describe('Foncandid Management Update Component', () => {
    let comp: FoncandidUpdateComponent;
    let fixture: ComponentFixture<FoncandidUpdateComponent>;
    let service: FoncandidService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [FoncandidUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(FoncandidUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(FoncandidUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(FoncandidService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Foncandid(123);
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
        const entity = new Foncandid();
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
