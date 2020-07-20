import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ResultatDetailleComponentsPage, ResultatDetailleDeleteDialog, ResultatDetailleUpdatePage } from './resultat-detaille.page-object';

const expect = chai.expect;

describe('ResultatDetaille e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let resultatDetailleComponentsPage: ResultatDetailleComponentsPage;
  let resultatDetailleUpdatePage: ResultatDetailleUpdatePage;
  let resultatDetailleDeleteDialog: ResultatDetailleDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load ResultatDetailles', async () => {
    await navBarPage.goToEntity('resultat-detaille');
    resultatDetailleComponentsPage = new ResultatDetailleComponentsPage();
    await browser.wait(ec.visibilityOf(resultatDetailleComponentsPage.title), 5000);
    expect(await resultatDetailleComponentsPage.getTitle()).to.eq('Resultat Detailles');
    await browser.wait(
      ec.or(ec.visibilityOf(resultatDetailleComponentsPage.entities), ec.visibilityOf(resultatDetailleComponentsPage.noResult)),
      1000
    );
  });

  it('should load create ResultatDetaille page', async () => {
    await resultatDetailleComponentsPage.clickOnCreateButton();
    resultatDetailleUpdatePage = new ResultatDetailleUpdatePage();
    expect(await resultatDetailleUpdatePage.getPageTitle()).to.eq('Create or edit a Resultat Detaille');
    await resultatDetailleUpdatePage.cancel();
  });

  it('should create and save ResultatDetailles', async () => {
    const nbButtonsBeforeCreate = await resultatDetailleComponentsPage.countDeleteButtons();

    await resultatDetailleComponentsPage.clickOnCreateButton();

    await promise.all([
      resultatDetailleUpdatePage.setNoDepotInput('noDepot'),
      resultatDetailleUpdatePage.sexeSelectLastOption(),
      resultatDetailleUpdatePage.setNomInput('nom'),
      resultatDetailleUpdatePage.setPrenomInput('prenom'),
      resultatDetailleUpdatePage.setNuanceInput('nuance'),
      resultatDetailleUpdatePage.setResultatCandidatInput('resultatCandidat'),
      resultatDetailleUpdatePage.setNuanceListeInput('nuanceListe'),
      resultatDetailleUpdatePage.setLibelleListeInput('libelleListe'),
      resultatDetailleUpdatePage.setTeteListeInput('teteListe'),
      resultatDetailleUpdatePage.setVoixInput('5'),
      resultatDetailleUpdatePage.setVoixOnInsInput('5'),
      resultatDetailleUpdatePage.setVoixOnExpInput('5'),
      resultatDetailleUpdatePage.setSiegesInput('5'),
      resultatDetailleUpdatePage.resultatSelectLastOption(),
    ]);

    expect(await resultatDetailleUpdatePage.getNoDepotInput()).to.eq('noDepot', 'Expected NoDepot value to be equals to noDepot');
    expect(await resultatDetailleUpdatePage.getNomInput()).to.eq('nom', 'Expected Nom value to be equals to nom');
    expect(await resultatDetailleUpdatePage.getPrenomInput()).to.eq('prenom', 'Expected Prenom value to be equals to prenom');
    expect(await resultatDetailleUpdatePage.getNuanceInput()).to.eq('nuance', 'Expected Nuance value to be equals to nuance');
    expect(await resultatDetailleUpdatePage.getResultatCandidatInput()).to.eq(
      'resultatCandidat',
      'Expected ResultatCandidat value to be equals to resultatCandidat'
    );
    expect(await resultatDetailleUpdatePage.getNuanceListeInput()).to.eq(
      'nuanceListe',
      'Expected NuanceListe value to be equals to nuanceListe'
    );
    expect(await resultatDetailleUpdatePage.getLibelleListeInput()).to.eq(
      'libelleListe',
      'Expected LibelleListe value to be equals to libelleListe'
    );
    expect(await resultatDetailleUpdatePage.getTeteListeInput()).to.eq('teteListe', 'Expected TeteListe value to be equals to teteListe');
    expect(await resultatDetailleUpdatePage.getVoixInput()).to.eq('5', 'Expected voix value to be equals to 5');
    expect(await resultatDetailleUpdatePage.getVoixOnInsInput()).to.eq('5', 'Expected voixOnIns value to be equals to 5');
    expect(await resultatDetailleUpdatePage.getVoixOnExpInput()).to.eq('5', 'Expected voixOnExp value to be equals to 5');
    expect(await resultatDetailleUpdatePage.getSiegesInput()).to.eq('5', 'Expected sieges value to be equals to 5');

    await resultatDetailleUpdatePage.save();
    expect(await resultatDetailleUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await resultatDetailleComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last ResultatDetaille', async () => {
    const nbButtonsBeforeDelete = await resultatDetailleComponentsPage.countDeleteButtons();
    await resultatDetailleComponentsPage.clickOnLastDeleteButton();

    resultatDetailleDeleteDialog = new ResultatDetailleDeleteDialog();
    expect(await resultatDetailleDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Resultat Detaille?');
    await resultatDetailleDeleteDialog.clickOnConfirmButton();

    expect(await resultatDetailleComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
