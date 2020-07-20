import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { DptComponentsPage, DptDeleteDialog, DptUpdatePage } from './dpt.page-object';

const expect = chai.expect;

describe('Dpt e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let dptComponentsPage: DptComponentsPage;
  let dptUpdatePage: DptUpdatePage;
  let dptDeleteDialog: DptDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Dpts', async () => {
    await navBarPage.goToEntity('dpt');
    dptComponentsPage = new DptComponentsPage();
    await browser.wait(ec.visibilityOf(dptComponentsPage.title), 5000);
    expect(await dptComponentsPage.getTitle()).to.eq('Dpts');
    await browser.wait(ec.or(ec.visibilityOf(dptComponentsPage.entities), ec.visibilityOf(dptComponentsPage.noResult)), 1000);
  });

  it('should load create Dpt page', async () => {
    await dptComponentsPage.clickOnCreateButton();
    dptUpdatePage = new DptUpdatePage();
    expect(await dptUpdatePage.getPageTitle()).to.eq('Create or edit a Dpt');
    await dptUpdatePage.cancel();
  });

  it('should create and save Dpts', async () => {
    const nbButtonsBeforeCreate = await dptComponentsPage.countDeleteButtons();

    await dptComponentsPage.clickOnCreateButton();

    await promise.all([
      dptUpdatePage.setDptnumInput('dptnum'),
      dptUpdatePage.setDptcodInput('dptcod'),
      dptUpdatePage.setDptlibInput('dptlib'),
      dptUpdatePage.setDptnbrsenInput('5'),
      dptUpdatePage.setDptmodscrsenInput('dptmodscrsen'),
      dptUpdatePage.setDptserInput('dptser'),
      dptUpdatePage.setRegcodInput('regcod'),
      dptUpdatePage.setDptnumtriInput('5'),
      dptUpdatePage.setDptcodsirpasInput('dptcodsirpas'),
      dptUpdatePage.setDptlicInput('dptlic'),
      dptUpdatePage.setDptartInput('dptart'),
      dptUpdatePage.setDptlibtriInput('dptlibtri'),
      dptUpdatePage.setTemvalcodInput('temvalcod'),
      dptUpdatePage.setEvelicInput('evelic'),
      dptUpdatePage.setEvelibInput('evelib'),
      dptUpdatePage.setEvelilInput('evelil'),
      dptUpdatePage.setEveobsInput('eveobs'),
      dptUpdatePage.setDptser2004Input('dptser2004'),
      dptUpdatePage.setDptcmtInput('dptcmt'),
      dptUpdatePage.setDptcmtaffInput('dptcmtaff'),
      dptUpdatePage.setDptdatdebInput('2000-12-31'),
      dptUpdatePage.setDptdatfinInput('2000-12-31'),
      dptUpdatePage.setEvetempubInput('evetempub'),
      dptUpdatePage.setDpturlcmpInput('dpturlcmp'),
      dptUpdatePage.setDptminintcodInput('dptminintcod'),
      dptUpdatePage.setSyscredatInput('2000-12-31'),
      dptUpdatePage.setSyscrelogInput('syscrelog'),
      dptUpdatePage.setSysmajdatInput('2000-12-31'),
      dptUpdatePage.setSysmajlogInput('sysmajlog'),
    ]);

    expect(await dptUpdatePage.getDptnumInput()).to.eq('dptnum', 'Expected Dptnum value to be equals to dptnum');
    expect(await dptUpdatePage.getDptcodInput()).to.eq('dptcod', 'Expected Dptcod value to be equals to dptcod');
    expect(await dptUpdatePage.getDptlibInput()).to.eq('dptlib', 'Expected Dptlib value to be equals to dptlib');
    expect(await dptUpdatePage.getDptnbrsenInput()).to.eq('5', 'Expected dptnbrsen value to be equals to 5');
    expect(await dptUpdatePage.getDptmodscrsenInput()).to.eq('dptmodscrsen', 'Expected Dptmodscrsen value to be equals to dptmodscrsen');
    expect(await dptUpdatePage.getDptserInput()).to.eq('dptser', 'Expected Dptser value to be equals to dptser');
    expect(await dptUpdatePage.getRegcodInput()).to.eq('regcod', 'Expected Regcod value to be equals to regcod');
    expect(await dptUpdatePage.getDptnumtriInput()).to.eq('5', 'Expected dptnumtri value to be equals to 5');
    expect(await dptUpdatePage.getDptcodsirpasInput()).to.eq('dptcodsirpas', 'Expected Dptcodsirpas value to be equals to dptcodsirpas');
    expect(await dptUpdatePage.getDptlicInput()).to.eq('dptlic', 'Expected Dptlic value to be equals to dptlic');
    expect(await dptUpdatePage.getDptartInput()).to.eq('dptart', 'Expected Dptart value to be equals to dptart');
    expect(await dptUpdatePage.getDptlibtriInput()).to.eq('dptlibtri', 'Expected Dptlibtri value to be equals to dptlibtri');
    expect(await dptUpdatePage.getTemvalcodInput()).to.eq('temvalcod', 'Expected Temvalcod value to be equals to temvalcod');
    expect(await dptUpdatePage.getEvelicInput()).to.eq('evelic', 'Expected Evelic value to be equals to evelic');
    expect(await dptUpdatePage.getEvelibInput()).to.eq('evelib', 'Expected Evelib value to be equals to evelib');
    expect(await dptUpdatePage.getEvelilInput()).to.eq('evelil', 'Expected Evelil value to be equals to evelil');
    expect(await dptUpdatePage.getEveobsInput()).to.eq('eveobs', 'Expected Eveobs value to be equals to eveobs');
    expect(await dptUpdatePage.getDptser2004Input()).to.eq('dptser2004', 'Expected Dptser2004 value to be equals to dptser2004');
    expect(await dptUpdatePage.getDptcmtInput()).to.eq('dptcmt', 'Expected Dptcmt value to be equals to dptcmt');
    expect(await dptUpdatePage.getDptcmtaffInput()).to.eq('dptcmtaff', 'Expected Dptcmtaff value to be equals to dptcmtaff');
    expect(await dptUpdatePage.getDptdatdebInput()).to.eq('2000-12-31', 'Expected dptdatdeb value to be equals to 2000-12-31');
    expect(await dptUpdatePage.getDptdatfinInput()).to.eq('2000-12-31', 'Expected dptdatfin value to be equals to 2000-12-31');
    expect(await dptUpdatePage.getEvetempubInput()).to.eq('evetempub', 'Expected Evetempub value to be equals to evetempub');
    expect(await dptUpdatePage.getDpturlcmpInput()).to.eq('dpturlcmp', 'Expected Dpturlcmp value to be equals to dpturlcmp');
    expect(await dptUpdatePage.getDptminintcodInput()).to.eq('dptminintcod', 'Expected Dptminintcod value to be equals to dptminintcod');
    expect(await dptUpdatePage.getSyscredatInput()).to.eq('2000-12-31', 'Expected syscredat value to be equals to 2000-12-31');
    expect(await dptUpdatePage.getSyscrelogInput()).to.eq('syscrelog', 'Expected Syscrelog value to be equals to syscrelog');
    expect(await dptUpdatePage.getSysmajdatInput()).to.eq('2000-12-31', 'Expected sysmajdat value to be equals to 2000-12-31');
    expect(await dptUpdatePage.getSysmajlogInput()).to.eq('sysmajlog', 'Expected Sysmajlog value to be equals to sysmajlog');

    await dptUpdatePage.save();
    expect(await dptUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await dptComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Dpt', async () => {
    const nbButtonsBeforeDelete = await dptComponentsPage.countDeleteButtons();
    await dptComponentsPage.clickOnLastDeleteButton();

    dptDeleteDialog = new DptDeleteDialog();
    expect(await dptDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Dpt?');
    await dptDeleteDialog.clickOnConfirmButton();

    expect(await dptComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
