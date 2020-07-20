import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { SenUpdateComponent } from 'app/entities/sen/sen-update.component';
import { SenService } from 'app/entities/sen/sen.service';
import { Sen } from 'app/shared/model/sen.model';

describe('Component Tests', () => {
  describe('Sen Management Update Component', () => {
    let comp: SenUpdateComponent;
    let fixture: ComponentFixture<SenUpdateComponent>;
    let service: SenService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [SenUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(SenUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SenUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SenService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Sen(123);
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
        const entity = new Sen();
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
