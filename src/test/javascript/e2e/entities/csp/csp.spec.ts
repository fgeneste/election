import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CspComponentsPage, CspDeleteDialog, CspUpdatePage } from './csp.page-object';

const expect = chai.expect;

describe('Csp e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let cspComponentsPage: CspComponentsPage;
  let cspUpdatePage: CspUpdatePage;
  let cspDeleteDialog: CspDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Csps', async () => {
    await navBarPage.goToEntity('csp');
    cspComponentsPage = new CspComponentsPage();
    await browser.wait(ec.visibilityOf(cspComponentsPage.title), 5000);
    expect(await cspComponentsPage.getTitle()).to.eq('Csps');
    await browser.wait(ec.or(ec.visibilityOf(cspComponentsPage.entities), ec.visibilityOf(cspComponentsPage.noResult)), 1000);
  });

  it('should load create Csp page', async () => {
    await cspComponentsPage.clickOnCreateButton();
    cspUpdatePage = new CspUpdatePage();
    expect(await cspUpdatePage.getPageTitle()).to.eq('Create or edit a Csp');
    await cspUpdatePage.cancel();
  });

  it('should create and save Csps', async () => {
    const nbButtonsBeforeCreate = await cspComponentsPage.countDeleteButtons();

    await cspComponentsPage.clickOnCreateButton();

    await promise.all([
      cspUpdatePage.setCspcodInput('cspcod'),
      cspUpdatePage.setCatprocodInput('catprocod'),
      cspUpdatePage.setCspfamcodInput('cspfamcod'),
      cspUpdatePage.setCsplibInput('csplib'),
      cspUpdatePage.setCspnumtriInput('5'),
      cspUpdatePage.setSyscredatInput('2000-12-31'),
      cspUpdatePage.setSyscrelogInput('syscrelog'),
      cspUpdatePage.setSysmajdatInput('2000-12-31'),
      cspUpdatePage.setSysmajlogInput('sysmajlog'),
    ]);

    expect(await cspUpdatePage.getCspcodInput()).to.eq('cspcod', 'Expected Cspcod value to be equals to cspcod');
    expect(await cspUpdatePage.getCatprocodInput()).to.eq('catprocod', 'Expected Catprocod value to be equals to catprocod');
    expect(await cspUpdatePage.getCspfamcodInput()).to.eq('cspfamcod', 'Expected Cspfamcod value to be equals to cspfamcod');
    expect(await cspUpdatePage.getCsplibInput()).to.eq('csplib', 'Expected Csplib value to be equals to csplib');
    expect(await cspUpdatePage.getCspnumtriInput()).to.eq('5', 'Expected cspnumtri value to be equals to 5');
    expect(await cspUpdatePage.getSyscredatInput()).to.eq('2000-12-31', 'Expected syscredat value to be equals to 2000-12-31');
    expect(await cspUpdatePage.getSyscrelogInput()).to.eq('syscrelog', 'Expected Syscrelog value to be equals to syscrelog');
    expect(await cspUpdatePage.getSysmajdatInput()).to.eq('2000-12-31', 'Expected sysmajdat value to be equals to 2000-12-31');
    expect(await cspUpdatePage.getSysmajlogInput()).to.eq('sysmajlog', 'Expected Sysmajlog value to be equals to sysmajlog');

    await cspUpdatePage.save();
    expect(await cspUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await cspComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Csp', async () => {
    const nbButtonsBeforeDelete = await cspComponentsPage.countDeleteButtons();
    await cspComponentsPage.clickOnLastDeleteButton();

    cspDeleteDialog = new CspDeleteDialog();
    expect(await cspDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Csp?');
    await cspDeleteDialog.clickOnConfirmButton();

    expect(await cspComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
