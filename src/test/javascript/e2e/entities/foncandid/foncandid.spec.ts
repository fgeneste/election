import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { FoncandidComponentsPage, FoncandidDeleteDialog, FoncandidUpdatePage } from './foncandid.page-object';

const expect = chai.expect;

describe('Foncandid e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let foncandidComponentsPage: FoncandidComponentsPage;
  let foncandidUpdatePage: FoncandidUpdatePage;
  let foncandidDeleteDialog: FoncandidDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Foncandids', async () => {
    await navBarPage.goToEntity('foncandid');
    foncandidComponentsPage = new FoncandidComponentsPage();
    await browser.wait(ec.visibilityOf(foncandidComponentsPage.title), 5000);
    expect(await foncandidComponentsPage.getTitle()).to.eq('Foncandids');
    await browser.wait(ec.or(ec.visibilityOf(foncandidComponentsPage.entities), ec.visibilityOf(foncandidComponentsPage.noResult)), 1000);
  });

  it('should load create Foncandid page', async () => {
    await foncandidComponentsPage.clickOnCreateButton();
    foncandidUpdatePage = new FoncandidUpdatePage();
    expect(await foncandidUpdatePage.getPageTitle()).to.eq('Create or edit a Foncandid');
    await foncandidUpdatePage.cancel();
  });

  it('should create and save Foncandids', async () => {
    const nbButtonsBeforeCreate = await foncandidComponentsPage.countDeleteButtons();

    await foncandidComponentsPage.clickOnCreateButton();

    await promise.all([
      foncandidUpdatePage.setFoncandidcodInput('foncandidcod'),
      foncandidUpdatePage.setFoncandidlibfemInput('foncandidlibfem'),
      foncandidUpdatePage.setFoncandidlibInput('foncandidlib'),
      foncandidUpdatePage.setFoncandidlicInput('foncandidlic'),
      foncandidUpdatePage.setFoncandidlicfemInput('foncandidlicfem'),
    ]);

    expect(await foncandidUpdatePage.getFoncandidcodInput()).to.eq(
      'foncandidcod',
      'Expected Foncandidcod value to be equals to foncandidcod'
    );
    expect(await foncandidUpdatePage.getFoncandidlibfemInput()).to.eq(
      'foncandidlibfem',
      'Expected Foncandidlibfem value to be equals to foncandidlibfem'
    );
    expect(await foncandidUpdatePage.getFoncandidlibInput()).to.eq(
      'foncandidlib',
      'Expected Foncandidlib value to be equals to foncandidlib'
    );
    expect(await foncandidUpdatePage.getFoncandidlicInput()).to.eq(
      'foncandidlic',
      'Expected Foncandidlic value to be equals to foncandidlic'
    );
    expect(await foncandidUpdatePage.getFoncandidlicfemInput()).to.eq(
      'foncandidlicfem',
      'Expected Foncandidlicfem value to be equals to foncandidlicfem'
    );

    await foncandidUpdatePage.save();
    expect(await foncandidUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await foncandidComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Foncandid', async () => {
    const nbButtonsBeforeDelete = await foncandidComponentsPage.countDeleteButtons();
    await foncandidComponentsPage.clickOnLastDeleteButton();

    foncandidDeleteDialog = new FoncandidDeleteDialog();
    expect(await foncandidDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Foncandid?');
    await foncandidDeleteDialog.clickOnConfirmButton();

    expect(await foncandidComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
