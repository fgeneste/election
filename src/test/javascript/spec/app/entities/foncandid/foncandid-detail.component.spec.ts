import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { FoncandidDetailComponent } from 'app/entities/foncandid/foncandid-detail.component';
import { Foncandid } from 'app/shared/model/foncandid.model';

describe('Component Tests', () => {
  describe('Foncandid Management Detail Component', () => {
    let comp: FoncandidDetailComponent;
    let fixture: ComponentFixture<FoncandidDetailComponent>;
    const route = ({ data: of({ foncandid: new Foncandid(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [FoncandidDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(FoncandidDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FoncandidDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load foncandid on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.foncandid).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
