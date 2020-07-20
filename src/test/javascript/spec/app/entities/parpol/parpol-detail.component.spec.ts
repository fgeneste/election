import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { ParpolDetailComponent } from 'app/entities/parpol/parpol-detail.component';
import { Parpol } from 'app/shared/model/parpol.model';

describe('Component Tests', () => {
  describe('Parpol Management Detail Component', () => {
    let comp: ParpolDetailComponent;
    let fixture: ComponentFixture<ParpolDetailComponent>;
    const route = ({ data: of({ parpol: new Parpol(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [ParpolDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ParpolDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ParpolDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load parpol on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.parpol).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
