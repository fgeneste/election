import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { EluComponentsPage, EluDeleteDialog, EluUpdatePage } from './elu.page-object';

const expect = chai.expect;

describe('Elu e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let eluComponentsPage: EluComponentsPage;
  let eluUpdatePage: EluUpdatePage;
  let eluDeleteDialog: EluDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Elus', async () => {
    await navBarPage.goToEntity('elu');
    eluComponentsPage = new EluComponentsPage();
    await browser.wait(ec.visibilityOf(eluComponentsPage.title), 5000);
    expect(await eluComponentsPage.getTitle()).to.eq('Elus');
    await browser.wait(ec.or(ec.visibilityOf(eluComponentsPage.entities), ec.visibilityOf(eluComponentsPage.noResult)), 1000);
  });

  it('should load create Elu page', async () => {
    await eluComponentsPage.clickOnCreateButton();
    eluUpdatePage = new EluUpdatePage();
    expect(await eluUpdatePage.getPageTitle()).to.eq('Create or edit a Elu');
    await eluUpdatePage.cancel();
  });

  it('should create and save Elus', async () => {
    const nbButtonsBeforeCreate = await eluComponentsPage.countDeleteButtons();

    await eluComponentsPage.clickOnCreateButton();

    await promise.all([
      eluUpdatePage.setLibelleDepartementInput('libelleDepartement'),
      eluUpdatePage.setNumeroDepotInput('5'),
      eluUpdatePage.setNumeroDepotListeInput('5'),
      eluUpdatePage.setLibelleListeInput('libelleListe'),
      eluUpdatePage.setNoOrdreListeInput('5'),
      eluUpdatePage.sexeSelectLastOption(),
      eluUpdatePage.setNomInput('nom'),
      eluUpdatePage.setPrenomInput('prenom'),
      eluUpdatePage.setDateNaissanceInput('2000-12-31'),
      eluUpdatePage.setNuanceInput('nuance'),
      eluUpdatePage.setProfessionInput('profession'),
      eluUpdatePage.setPersonnaliteInput('personnalite'),
      eluUpdatePage.setSexeSuppInput('sexeSupp'),
      eluUpdatePage.setNomSuppInput('nomSupp'),
      eluUpdatePage.setPrenomSuppInput('prenomSupp'),
      eluUpdatePage.setDateNaissanceSuppInput('2000-12-31'),
      eluUpdatePage.setTourElectionInput('tourElection'),
      eluUpdatePage.elusenSelectLastOption(),
      eluUpdatePage.suppleantsenSelectLastOption(),
      eluUpdatePage.cspSelectLastOption(),
      eluUpdatePage.dptSelectLastOption(),
    ]);

    expect(await eluUpdatePage.getLibelleDepartementInput()).to.eq(
      'libelleDepartement',
      'Expected LibelleDepartement value to be equals to libelleDepartement'
    );
    expect(await eluUpdatePage.getNumeroDepotInput()).to.eq('5', 'Expected numeroDepot value to be equals to 5');
    expect(await eluUpdatePage.getNumeroDepotListeInput()).to.eq('5', 'Expected numeroDepotListe value to be equals to 5');
    expect(await eluUpdatePage.getLibelleListeInput()).to.eq('libelleListe', 'Expected LibelleListe value to be equals to libelleListe');
    expect(await eluUpdatePage.getNoOrdreListeInput()).to.eq('5', 'Expected noOrdreListe value to be equals to 5');
    expect(await eluUpdatePage.getNomInput()).to.eq('nom', 'Expected Nom value to be equals to nom');
    expect(await eluUpdatePage.getPrenomInput()).to.eq('prenom', 'Expected Prenom value to be equals to prenom');
    expect(await eluUpdatePage.getDateNaissanceInput()).to.eq('2000-12-31', 'Expected dateNaissance value to be equals to 2000-12-31');
    expect(await eluUpdatePage.getNuanceInput()).to.eq('nuance', 'Expected Nuance value to be equals to nuance');
    expect(await eluUpdatePage.getProfessionInput()).to.eq('profession', 'Expected Profession value to be equals to profession');
    expect(await eluUpdatePage.getPersonnaliteInput()).to.eq('personnalite', 'Expected Personnalite value to be equals to personnalite');
    const selectedSortant = eluUpdatePage.getSortantInput();
    if (await selectedSortant.isSelected()) {
      await eluUpdatePage.getSortantInput().click();
      expect(await eluUpdatePage.getSortantInput().isSelected(), 'Expected sortant not to be selected').to.be.false;
    } else {
      await eluUpdatePage.getSortantInput().click();
      expect(await eluUpdatePage.getSortantInput().isSelected(), 'Expected sortant to be selected').to.be.true;
    }
    expect(await eluUpdatePage.getSexeSuppInput()).to.eq('sexeSupp', 'Expected SexeSupp value to be equals to sexeSupp');
    expect(await eluUpdatePage.getNomSuppInput()).to.eq('nomSupp', 'Expected NomSupp value to be equals to nomSupp');
    expect(await eluUpdatePage.getPrenomSuppInput()).to.eq('prenomSupp', 'Expected PrenomSupp value to be equals to prenomSupp');
    expect(await eluUpdatePage.getDateNaissanceSuppInput()).to.eq(
      '2000-12-31',
      'Expected dateNaissanceSupp value to be equals to 2000-12-31'
    );
    expect(await eluUpdatePage.getTourElectionInput()).to.eq('tourElection', 'Expected TourElection value to be equals to tourElection');

    await eluUpdatePage.save();
    expect(await eluUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await eluComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Elu', async () => {
    const nbButtonsBeforeDelete = await eluComponentsPage.countDeleteButtons();
    await eluComponentsPage.clickOnLastDeleteButton();

    eluDeleteDialog = new EluDeleteDialog();
    expect(await eluDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Elu?');
    await eluDeleteDialog.clickOnConfirmButton();

    expect(await eluComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
