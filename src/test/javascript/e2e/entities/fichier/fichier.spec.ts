import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { FichierComponentsPage, FichierDeleteDialog, FichierUpdatePage } from './fichier.page-object';

const expect = chai.expect;

describe('Fichier e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fichierComponentsPage: FichierComponentsPage;
  let fichierUpdatePage: FichierUpdatePage;
  let fichierDeleteDialog: FichierDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Fichiers', async () => {
    await navBarPage.goToEntity('fichier');
    fichierComponentsPage = new FichierComponentsPage();
    await browser.wait(ec.visibilityOf(fichierComponentsPage.title), 5000);
    expect(await fichierComponentsPage.getTitle()).to.eq('Fichiers');
    await browser.wait(ec.or(ec.visibilityOf(fichierComponentsPage.entities), ec.visibilityOf(fichierComponentsPage.noResult)), 1000);
  });

  it('should load create Fichier page', async () => {
    await fichierComponentsPage.clickOnCreateButton();
    fichierUpdatePage = new FichierUpdatePage();
    expect(await fichierUpdatePage.getPageTitle()).to.eq('Create or edit a Fichier');
    await fichierUpdatePage.cancel();
  });

  it('should create and save Fichiers', async () => {
    const nbButtonsBeforeCreate = await fichierComponentsPage.countDeleteButtons();

    await fichierComponentsPage.clickOnCreateButton();

    await promise.all([
      fichierUpdatePage.setFilenameInput('filename'),
      fichierUpdatePage.setPathInput('path'),
      fichierUpdatePage.setTypeInput('type'),
      fichierUpdatePage.setDateTraitementInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
    ]);

    expect(await fichierUpdatePage.getFilenameInput()).to.eq('filename', 'Expected Filename value to be equals to filename');
    expect(await fichierUpdatePage.getPathInput()).to.eq('path', 'Expected Path value to be equals to path');
    expect(await fichierUpdatePage.getTypeInput()).to.eq('type', 'Expected Type value to be equals to type');
    const selectedTraite = fichierUpdatePage.getTraiteInput();
    if (await selectedTraite.isSelected()) {
      await fichierUpdatePage.getTraiteInput().click();
      expect(await fichierUpdatePage.getTraiteInput().isSelected(), 'Expected traite not to be selected').to.be.false;
    } else {
      await fichierUpdatePage.getTraiteInput().click();
      expect(await fichierUpdatePage.getTraiteInput().isSelected(), 'Expected traite to be selected').to.be.true;
    }
    expect(await fichierUpdatePage.getDateTraitementInput()).to.contain(
      '2001-01-01T02:30',
      'Expected dateTraitement value to be equals to 2000-12-31'
    );

    await fichierUpdatePage.save();
    expect(await fichierUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await fichierComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Fichier', async () => {
    const nbButtonsBeforeDelete = await fichierComponentsPage.countDeleteButtons();
    await fichierComponentsPage.clickOnLastDeleteButton();

    fichierDeleteDialog = new FichierDeleteDialog();
    expect(await fichierDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Fichier?');
    await fichierDeleteDialog.clickOnConfirmButton();

    expect(await fichierComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
