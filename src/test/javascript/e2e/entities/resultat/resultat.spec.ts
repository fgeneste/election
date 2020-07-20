import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ResultatComponentsPage, ResultatDeleteDialog, ResultatUpdatePage } from './resultat.page-object';

const expect = chai.expect;

describe('Resultat e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let resultatComponentsPage: ResultatComponentsPage;
  let resultatUpdatePage: ResultatUpdatePage;
  let resultatDeleteDialog: ResultatDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Resultats', async () => {
    await navBarPage.goToEntity('resultat');
    resultatComponentsPage = new ResultatComponentsPage();
    await browser.wait(ec.visibilityOf(resultatComponentsPage.title), 5000);
    expect(await resultatComponentsPage.getTitle()).to.eq('Resultats');
    await browser.wait(ec.or(ec.visibilityOf(resultatComponentsPage.entities), ec.visibilityOf(resultatComponentsPage.noResult)), 1000);
  });

  it('should load create Resultat page', async () => {
    await resultatComponentsPage.clickOnCreateButton();
    resultatUpdatePage = new ResultatUpdatePage();
    expect(await resultatUpdatePage.getPageTitle()).to.eq('Create or edit a Resultat');
    await resultatUpdatePage.cancel();
  });

  it('should create and save Resultats', async () => {
    const nbButtonsBeforeCreate = await resultatComponentsPage.countDeleteButtons();

    await resultatComponentsPage.clickOnCreateButton();

    await promise.all([
      resultatUpdatePage.setDateExportInput('2000-12-31'),
      resultatUpdatePage.setNumeroDepartementInput('numeroDepartement'),
      resultatUpdatePage.setLibelleDepartementInput('libelleDepartement'),
      resultatUpdatePage.setNoTourInput('noTour'),
      resultatUpdatePage.setInscritsInput('5'),
      resultatUpdatePage.setAbstentionsInput('5'),
      resultatUpdatePage.setAbsOnInsInput('5'),
      resultatUpdatePage.setVotantsInput('5'),
      resultatUpdatePage.setVotOnInsInput('5'),
      resultatUpdatePage.setBlancsInput('5'),
      resultatUpdatePage.setBlancsOnInsInput('5'),
      resultatUpdatePage.setBlancsOnVotInput('5'),
      resultatUpdatePage.setNulsInput('5'),
      resultatUpdatePage.setNulsOnInsInput('5'),
      resultatUpdatePage.setNulsOnVotInput('5'),
      resultatUpdatePage.setExprimeInput('5'),
      resultatUpdatePage.setExpOnInsInput('5'),
      resultatUpdatePage.setExpOnVotInput('5'),
    ]);

    expect(await resultatUpdatePage.getDateExportInput()).to.eq('2000-12-31', 'Expected dateExport value to be equals to 2000-12-31');
    expect(await resultatUpdatePage.getNumeroDepartementInput()).to.eq(
      'numeroDepartement',
      'Expected NumeroDepartement value to be equals to numeroDepartement'
    );
    expect(await resultatUpdatePage.getLibelleDepartementInput()).to.eq(
      'libelleDepartement',
      'Expected LibelleDepartement value to be equals to libelleDepartement'
    );
    expect(await resultatUpdatePage.getNoTourInput()).to.eq('noTour', 'Expected NoTour value to be equals to noTour');
    expect(await resultatUpdatePage.getInscritsInput()).to.eq('5', 'Expected inscrits value to be equals to 5');
    expect(await resultatUpdatePage.getAbstentionsInput()).to.eq('5', 'Expected abstentions value to be equals to 5');
    expect(await resultatUpdatePage.getAbsOnInsInput()).to.eq('5', 'Expected absOnIns value to be equals to 5');
    expect(await resultatUpdatePage.getVotantsInput()).to.eq('5', 'Expected votants value to be equals to 5');
    expect(await resultatUpdatePage.getVotOnInsInput()).to.eq('5', 'Expected votOnIns value to be equals to 5');
    expect(await resultatUpdatePage.getBlancsInput()).to.eq('5', 'Expected blancs value to be equals to 5');
    expect(await resultatUpdatePage.getBlancsOnInsInput()).to.eq('5', 'Expected blancsOnIns value to be equals to 5');
    expect(await resultatUpdatePage.getBlancsOnVotInput()).to.eq('5', 'Expected blancsOnVot value to be equals to 5');
    expect(await resultatUpdatePage.getNulsInput()).to.eq('5', 'Expected nuls value to be equals to 5');
    expect(await resultatUpdatePage.getNulsOnInsInput()).to.eq('5', 'Expected nulsOnIns value to be equals to 5');
    expect(await resultatUpdatePage.getNulsOnVotInput()).to.eq('5', 'Expected nulsOnVot value to be equals to 5');
    expect(await resultatUpdatePage.getExprimeInput()).to.eq('5', 'Expected exprime value to be equals to 5');
    expect(await resultatUpdatePage.getExpOnInsInput()).to.eq('5', 'Expected expOnIns value to be equals to 5');
    expect(await resultatUpdatePage.getExpOnVotInput()).to.eq('5', 'Expected expOnVot value to be equals to 5');

    await resultatUpdatePage.save();
    expect(await resultatUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await resultatComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Resultat', async () => {
    const nbButtonsBeforeDelete = await resultatComponentsPage.countDeleteButtons();
    await resultatComponentsPage.clickOnLastDeleteButton();

    resultatDeleteDialog = new ResultatDeleteDialog();
    expect(await resultatDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Resultat?');
    await resultatDeleteDialog.clickOnConfirmButton();

    expect(await resultatComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
