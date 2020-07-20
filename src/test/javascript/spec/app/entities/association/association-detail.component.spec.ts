import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ElectionvueTestModule } from '../../../test.module';
import { AssociationDetailComponent } from 'app/entities/association/association-detail.component';
import { Association } from 'app/shared/model/association.model';

describe('Component Tests', () => {
  describe('Association Management Detail Component', () => {
    let comp: AssociationDetailComponent;
    let fixture: ComponentFixture<AssociationDetailComponent>;
    const route = ({ data: of({ association: new Association(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ElectionvueTestModule],
        declarations: [AssociationDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(AssociationDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AssociationDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load association on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.association).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
