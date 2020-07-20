import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ParpolComponentsPage, ParpolDeleteDialog, ParpolUpdatePage } from './parpol.page-object';

const expect = chai.expect;

describe('Parpol e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let parpolComponentsPage: ParpolComponentsPage;
  let parpolUpdatePage: ParpolUpdatePage;
  let parpolDeleteDialog: ParpolDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Parpols', async () => {
    await navBarPage.goToEntity('parpol');
    parpolComponentsPage = new ParpolComponentsPage();
    await browser.wait(ec.visibilityOf(parpolComponentsPage.title), 5000);
    expect(await parpolComponentsPage.getTitle()).to.eq('Parpols');
    await browser.wait(ec.or(ec.visibilityOf(parpolComponentsPage.entities), ec.visibilityOf(parpolComponentsPage.noResult)), 1000);
  });

  it('should load create Parpol page', async () => {
    await parpolComponentsPage.clickOnCreateButton();
    parpolUpdatePage = new ParpolUpdatePage();
    expect(await parpolUpdatePage.getPageTitle()).to.eq('Create or edit a Parpol');
    await parpolUpdatePage.cancel();
  });

  it('should create and save Parpols', async () => {
    const nbButtonsBeforeCreate = await parpolComponentsPage.countDeleteButtons();

    await parpolComponentsPage.clickOnCreateButton();

    await promise.all([
      parpolUpdatePage.setTenpolcodInput('tenpolcod'),
      parpolUpdatePage.setOrgcodInput('orgcod'),
      parpolUpdatePage.setTypparpolcodInput('typparpolcod'),
      parpolUpdatePage.setTyporgcodInput('typorgcod'),
      parpolUpdatePage.setEveobsInput('eveobs'),
      parpolUpdatePage.setOrgartInput('orgart'),
      parpolUpdatePage.setOrgnumtriInput('5'),
      parpolUpdatePage.setOrgdatfinInput('2000-12-31'),
      parpolUpdatePage.setOrgnumtieInput('orgnumtie'),
      parpolUpdatePage.setOrgurlsimInput('orgurlsim'),
      parpolUpdatePage.setOrgurlcmpInput('orgurlcmp'),
      parpolUpdatePage.setOrgtemannuInput('orgtemannu'),
      parpolUpdatePage.setEvetempubInput('evetempub'),
      parpolUpdatePage.setSyscredatInput('2000-12-31'),
      parpolUpdatePage.setSyscrelogInput('syscrelog'),
      parpolUpdatePage.setSysmajdatInput('2000-12-31'),
      parpolUpdatePage.setSysmajlogInput('sysmajlog'),
      parpolUpdatePage.setEvelilInput('evelil'),
      parpolUpdatePage.setEvelibInput('evelib'),
      parpolUpdatePage.setEvelicInput('evelic'),
      parpolUpdatePage.setTemvalcodInput('temvalcod'),
      parpolUpdatePage.setOrgdatcreInput('2000-12-31'),
    ]);

    expect(await parpolUpdatePage.getTenpolcodInput()).to.eq('tenpolcod', 'Expected Tenpolcod value to be equals to tenpolcod');
    expect(await parpolUpdatePage.getOrgcodInput()).to.eq('orgcod', 'Expected Orgcod value to be equals to orgcod');
    expect(await parpolUpdatePage.getTypparpolcodInput()).to.eq('typparpolcod', 'Expected Typparpolcod value to be equals to typparpolcod');
    expect(await parpolUpdatePage.getTyporgcodInput()).to.eq('typorgcod', 'Expected Typorgcod value to be equals to typorgcod');
    expect(await parpolUpdatePage.getEveobsInput()).to.eq('eveobs', 'Expected Eveobs value to be equals to eveobs');
    expect(await parpolUpdatePage.getOrgartInput()).to.eq('orgart', 'Expected Orgart value to be equals to orgart');
    expect(await parpolUpdatePage.getOrgnumtriInput()).to.eq('5', 'Expected orgnumtri value to be equals to 5');
    expect(await parpolUpdatePage.getOrgdatfinInput()).to.eq('2000-12-31', 'Expected orgdatfin value to be equals to 2000-12-31');
    expect(await parpolUpdatePage.getOrgnumtieInput()).to.eq('orgnumtie', 'Expected Orgnumtie value to be equals to orgnumtie');
    expect(await parpolUpdatePage.getOrgurlsimInput()).to.eq('orgurlsim', 'Expected Orgurlsim value to be equals to orgurlsim');
    expect(await parpolUpdatePage.getOrgurlcmpInput()).to.eq('orgurlcmp', 'Expected Orgurlcmp value to be equals to orgurlcmp');
    expect(await parpolUpdatePage.getOrgtemannuInput()).to.eq('orgtemannu', 'Expected Orgtemannu value to be equals to orgtemannu');
    expect(await parpolUpdatePage.getEvetempubInput()).to.eq('evetempub', 'Expected Evetempub value to be equals to evetempub');
    expect(await parpolUpdatePage.getSyscredatInput()).to.eq('2000-12-31', 'Expected syscredat value to be equals to 2000-12-31');
    expect(await parpolUpdatePage.getSyscrelogInput()).to.eq('syscrelog', 'Expected Syscrelog value to be equals to syscrelog');
    expect(await parpolUpdatePage.getSysmajdatInput()).to.eq('2000-12-31', 'Expected sysmajdat value to be equals to 2000-12-31');
    expect(await parpolUpdatePage.getSysmajlogInput()).to.eq('sysmajlog', 'Expected Sysmajlog value to be equals to sysmajlog');
    expect(await parpolUpdatePage.getEvelilInput()).to.eq('evelil', 'Expected Evelil value to be equals to evelil');
    expect(await parpolUpdatePage.getEvelibInput()).to.eq('evelib', 'Expected Evelib value to be equals to evelib');
    expect(await parpolUpdatePage.getEvelicInput()).to.eq('evelic', 'Expected Evelic value to be equals to evelic');
    expect(await parpolUpdatePage.getTemvalcodInput()).to.eq('temvalcod', 'Expected Temvalcod value to be equals to temvalcod');
    expect(await parpolUpdatePage.getOrgdatcreInput()).to.eq('2000-12-31', 'Expected orgdatcre value to be equals to 2000-12-31');

    await parpolUpdatePage.save();
    expect(await parpolUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await parpolComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Parpol', async () => {
    const nbButtonsBeforeDelete = await parpolComponentsPage.countDeleteButtons();
    await parpolComponentsPage.clickOnLastDeleteButton();

    parpolDeleteDialog = new ParpolDeleteDialog();
    expect(await parpolDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Parpol?');
    await parpolDeleteDialog.clickOnConfirmButton();

    expect(await parpolComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
