import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CandidatComponentsPage, CandidatDeleteDialog, CandidatUpdatePage } from './candidat.page-object';

const expect = chai.expect;

describe('Candidat e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let candidatComponentsPage: CandidatComponentsPage;
  let candidatUpdatePage: CandidatUpdatePage;
  let candidatDeleteDialog: CandidatDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Candidats', async () => {
    await navBarPage.goToEntity('candidat');
    candidatComponentsPage = new CandidatComponentsPage();
    await browser.wait(ec.visibilityOf(candidatComponentsPage.title), 5000);
    expect(await candidatComponentsPage.getTitle()).to.eq('Candidats');
    await browser.wait(ec.or(ec.visibilityOf(candidatComponentsPage.entities), ec.visibilityOf(candidatComponentsPage.noResult)), 1000);
  });

  it('should load create Candidat page', async () => {
    await candidatComponentsPage.clickOnCreateButton();
    candidatUpdatePage = new CandidatUpdatePage();
    expect(await candidatUpdatePage.getPageTitle()).to.eq('Create or edit a Candidat');
    await candidatUpdatePage.cancel();
  });

  it('should create and save Candidats', async () => {
    const nbButtonsBeforeCreate = await candidatComponentsPage.countDeleteButtons();

    await candidatComponentsPage.clickOnCreateButton();

    await promise.all([
      candidatUpdatePage.setLibelleDepartementInput('libelleDepartement'),
      candidatUpdatePage.setNumeroDepotInput('5'),
      candidatUpdatePage.setNumeroDepotListeInput('5'),
      candidatUpdatePage.setLibelleListeInput('libelleListe'),
      candidatUpdatePage.setNoOrdreListeInput('5'),
      candidatUpdatePage.sexeSelectLastOption(),
      candidatUpdatePage.setNomInput('nom'),
      candidatUpdatePage.setPrenomInput('prenom'),
      candidatUpdatePage.setDateNaissanceInput('2000-12-31'),
      candidatUpdatePage.setNuanceInput('nuance'),
      candidatUpdatePage.setProfessionInput('profession'),
      candidatUpdatePage.setPersonnaliteInput('personnalite'),
      candidatUpdatePage.setSexeSuppInput('sexeSupp'),
      candidatUpdatePage.setNomSuppInput('nomSupp'),
      candidatUpdatePage.setPrenomSuppInput('prenomSupp'),
      candidatUpdatePage.setDateNaissanceSuppInput('2000-12-31'),
      candidatUpdatePage.candidatreconnuSelectLastOption(),
      candidatUpdatePage.suppleantreconnuSelectLastOption(),
      candidatUpdatePage.eluSelectLastOption(),
      candidatUpdatePage.cspSelectLastOption(),
      candidatUpdatePage.dptSelectLastOption(),
    ]);

    expect(await candidatUpdatePage.getLibelleDepartementInput()).to.eq(
      'libelleDepartement',
      'Expected LibelleDepartement value to be equals to libelleDepartement'
    );
    expect(await candidatUpdatePage.getNumeroDepotInput()).to.eq('5', 'Expected numeroDepot value to be equals to 5');
    expect(await candidatUpdatePage.getNumeroDepotListeInput()).to.eq('5', 'Expected numeroDepotListe value to be equals to 5');
    expect(await candidatUpdatePage.getLibelleListeInput()).to.eq(
      'libelleListe',
      'Expected LibelleListe value to be equals to libelleListe'
    );
    expect(await candidatUpdatePage.getNoOrdreListeInput()).to.eq('5', 'Expected noOrdreListe value to be equals to 5');
    expect(await candidatUpdatePage.getNomInput()).to.eq('nom', 'Expected Nom value to be equals to nom');
    expect(await candidatUpdatePage.getPrenomInput()).to.eq('prenom', 'Expected Prenom value to be equals to prenom');
    expect(await candidatUpdatePage.getDateNaissanceInput()).to.eq('2000-12-31', 'Expected dateNaissance value to be equals to 2000-12-31');
    expect(await candidatUpdatePage.getNuanceInput()).to.eq('nuance', 'Expected Nuance value to be equals to nuance');
    expect(await candidatUpdatePage.getProfessionInput()).to.eq('profession', 'Expected Profession value to be equals to profession');
    expect(await candidatUpdatePage.getPersonnaliteInput()).to.eq(
      'personnalite',
      'Expected Personnalite value to be equals to personnalite'
    );
    const selectedSortant = candidatUpdatePage.getSortantInput();
    if (await selectedSortant.isSelected()) {
      await candidatUpdatePage.getSortantInput().click();
      expect(await candidatUpdatePage.getSortantInput().isSelected(), 'Expected sortant not to be selected').to.be.false;
    } else {
      await candidatUpdatePage.getSortantInput().click();
      expect(await candidatUpdatePage.getSortantInput().isSelected(), 'Expected sortant to be selected').to.be.true;
    }
    expect(await candidatUpdatePage.getSexeSuppInput()).to.eq('sexeSupp', 'Expected SexeSupp value to be equals to sexeSupp');
    expect(await candidatUpdatePage.getNomSuppInput()).to.eq('nomSupp', 'Expected NomSupp value to be equals to nomSupp');
    expect(await candidatUpdatePage.getPrenomSuppInput()).to.eq('prenomSupp', 'Expected PrenomSupp value to be equals to prenomSupp');
    expect(await candidatUpdatePage.getDateNaissanceSuppInput()).to.eq(
      '2000-12-31',
      'Expected dateNaissanceSupp value to be equals to 2000-12-31'
    );
    const selectedIsElu = candidatUpdatePage.getIsEluInput();
    if (await selectedIsElu.isSelected()) {
      await candidatUpdatePage.getIsEluInput().click();
      expect(await candidatUpdatePage.getIsEluInput().isSelected(), 'Expected isElu not to be selected').to.be.false;
    } else {
      await candidatUpdatePage.getIsEluInput().click();
      expect(await candidatUpdatePage.getIsEluInput().isSelected(), 'Expected isElu to be selected').to.be.true;
    }

    await candidatUpdatePage.save();
    expect(await candidatUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await candidatComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Candidat', async () => {
    const nbButtonsBeforeDelete = await candidatComponentsPage.countDeleteButtons();
    await candidatComponentsPage.clickOnLastDeleteButton();

    candidatDeleteDialog = new CandidatDeleteDialog();
    expect(await candidatDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Candidat?');
    await candidatDeleteDialog.clickOnConfirmButton();

    expect(await candidatComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
