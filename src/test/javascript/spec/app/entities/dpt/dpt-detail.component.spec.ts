import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { DptDetailComponent } from 'app/entities/dpt/dpt-detail.component';
import { Dpt } from 'app/shared/model/dpt.model';

describe('Component Tests', () => {
  describe('Dpt Management Detail Component', () => {
    let comp: DptDetailComponent;
    let fixture: ComponentFixture<DptDetailComponent>;
    const route = ({ data: of({ dpt: new Dpt(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [DptDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DptDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DptDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dpt on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dpt).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
