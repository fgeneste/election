import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { ResultatDetailleDetailComponent } from 'app/entities/resultat-detaille/resultat-detaille-detail.component';
import { ResultatDetaille } from 'app/shared/model/resultat-detaille.model';

describe('Component Tests', () => {
  describe('ResultatDetaille Management Detail Component', () => {
    let comp: ResultatDetailleDetailComponent;
    let fixture: ComponentFixture<ResultatDetailleDetailComponent>;
    const route = ({ data: of({ resultatDetaille: new ResultatDetaille(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [ResultatDetailleDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ResultatDetailleDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ResultatDetailleDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load resultatDetaille on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.resultatDetaille).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
