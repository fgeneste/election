import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { SenDetailComponent } from 'app/entities/sen/sen-detail.component';
import { Sen } from 'app/shared/model/sen.model';

describe('Component Tests', () => {
  describe('Sen Management Detail Component', () => {
    let comp: SenDetailComponent;
    let fixture: ComponentFixture<SenDetailComponent>;
    const route = ({ data: of({ sen: new Sen(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [SenDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SenDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SenDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load sen on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.sen).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
