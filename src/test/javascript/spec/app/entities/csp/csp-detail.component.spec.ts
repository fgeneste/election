import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { CspDetailComponent } from 'app/entities/csp/csp-detail.component';
import { Csp } from 'app/shared/model/csp.model';

describe('Component Tests', () => {
  describe('Csp Management Detail Component', () => {
    let comp: CspDetailComponent;
    let fixture: ComponentFixture<CspDetailComponent>;
    const route = ({ data: of({ csp: new Csp(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [CspDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CspDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CspDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load csp on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.csp).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
