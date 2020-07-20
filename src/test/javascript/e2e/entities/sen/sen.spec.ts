import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SenComponentsPage, SenDeleteDialog, SenUpdatePage } from './sen.page-object';

const expect = chai.expect;

describe('Sen e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let senComponentsPage: SenComponentsPage;
  let senUpdatePage: SenUpdatePage;
  let senDeleteDialog: SenDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Sens', async () => {
    await navBarPage.goToEntity('sen');
    senComponentsPage = new SenComponentsPage();
    await browser.wait(ec.visibilityOf(senComponentsPage.title), 5000);
    expect(await senComponentsPage.getTitle()).to.eq('Sens');
    await browser.wait(ec.or(ec.visibilityOf(senComponentsPage.entities), ec.visibilityOf(senComponentsPage.noResult)), 1000);
  });

  it('should load create Sen page', async () => {
    await senComponentsPage.clickOnCreateButton();
    senUpdatePage = new SenUpdatePage();
    expect(await senUpdatePage.getPageTitle()).to.eq('Create or edit a Sen');
    await senUpdatePage.cancel();
  });

  it('should create and save Sens', async () => {
    const nbButtonsBeforeCreate = await senComponentsPage.countDeleteButtons();

    await senComponentsPage.clickOnCreateButton();

    await promise.all([
      senUpdatePage.setSenmatInput('senmat'),
      senUpdatePage.setQuacodInput('quacod'),
      senUpdatePage.setSennomuseInput('sennomuse'),
      senUpdatePage.setSennompatInput('sennompat'),
      senUpdatePage.setSennommarInput('sennommar'),
      senUpdatePage.setSennomtecInput('sennomtec'),
      senUpdatePage.setSenprenomuseInput('senprenomuse'),
      senUpdatePage.setSenprenomcivInput('senprenomciv'),
      senUpdatePage.setSendatnaiInput('2000-12-31'),
      senUpdatePage.setSenlienaiInput('senlienai'),
      senUpdatePage.setSendatdecInput('2000-12-31'),
      senUpdatePage.setEtasencodInput('etasencod'),
      senUpdatePage.setSendesproInput('sendespro'),
      senUpdatePage.setPcscodInput('pcscod'),
      senUpdatePage.setCatprocodInput('catprocod'),
      senUpdatePage.setSenrngprtInput('5'),
      senUpdatePage.setSengrppolcodcouInput('sengrppolcodcou'),
      senUpdatePage.setSengrppolliccouInput('sengrppolliccou'),
      senUpdatePage.setSentypappcouInput('sentypappcou'),
      senUpdatePage.setSencomcodcouInput('sencomcodcou'),
      senUpdatePage.setSencomliccouInput('sencomliccou'),
      senUpdatePage.setSencirnumcouInput('5'),
      senUpdatePage.setSencircouInput('sencircou'),
      senUpdatePage.setSenburliccouInput('senburliccou'),
      senUpdatePage.setSenemaInput('senema'),
      senUpdatePage.setSennumtelsenInput('sennumtelsen'),
      senUpdatePage.setSendiplomeInput('sendiplome'),
      senUpdatePage.setSendecoraInput('sendecora'),
      senUpdatePage.setSendatpreeleInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      senUpdatePage.setIndidInput('5'),
      senUpdatePage.setSennomusecapInput('sennomusecap'),
      senUpdatePage.setSenpagperInput('senpagper'),
      senUpdatePage.setSenrngprtcodInput('senrngprtcod'),
      senUpdatePage.setParpolorgcodInput('parpolorgcod'),
      senUpdatePage.setSenliedecInput('senliedec'),
      senUpdatePage.setSendptnumnaiInput('5'),
      senUpdatePage.setSendptnumdecInput('5'),
      senUpdatePage.setSenauttraInput('senauttra'),
      senUpdatePage.setSenlogInput('senlog'),
      senUpdatePage.setSencrinomInput('sencrinom'),
      senUpdatePage.setSenfemInput('senfem'),
      senUpdatePage.setSenautemaInput('senautema'),
      senUpdatePage.setSenautgrpsenInput('senautgrpsen'),
      senUpdatePage.setSenautpagperInput('senautpagper'),
      senUpdatePage.setSennbrqueInput('5'),
      senUpdatePage.setSennomdisInput('sennomdis'),
      senUpdatePage.setNumsenInput('numsen'),
      senUpdatePage.setSennumsieInput('5'),
      senUpdatePage.setSennbrvidInput('5'),
      senUpdatePage.setSennomditInput('sennomdit'),
      senUpdatePage.setTitnobcodInput('titnobcod'),
    ]);

    expect(await senUpdatePage.getSenmatInput()).to.eq('senmat', 'Expected Senmat value to be equals to senmat');
    expect(await senUpdatePage.getQuacodInput()).to.eq('quacod', 'Expected Quacod value to be equals to quacod');
    expect(await senUpdatePage.getSennomuseInput()).to.eq('sennomuse', 'Expected Sennomuse value to be equals to sennomuse');
    expect(await senUpdatePage.getSennompatInput()).to.eq('sennompat', 'Expected Sennompat value to be equals to sennompat');
    expect(await senUpdatePage.getSennommarInput()).to.eq('sennommar', 'Expected Sennommar value to be equals to sennommar');
    expect(await senUpdatePage.getSennomtecInput()).to.eq('sennomtec', 'Expected Sennomtec value to be equals to sennomtec');
    expect(await senUpdatePage.getSenprenomuseInput()).to.eq('senprenomuse', 'Expected Senprenomuse value to be equals to senprenomuse');
    expect(await senUpdatePage.getSenprenomcivInput()).to.eq('senprenomciv', 'Expected Senprenomciv value to be equals to senprenomciv');
    expect(await senUpdatePage.getSendatnaiInput()).to.eq('2000-12-31', 'Expected sendatnai value to be equals to 2000-12-31');
    expect(await senUpdatePage.getSenlienaiInput()).to.eq('senlienai', 'Expected Senlienai value to be equals to senlienai');
    expect(await senUpdatePage.getSendatdecInput()).to.eq('2000-12-31', 'Expected sendatdec value to be equals to 2000-12-31');
    expect(await senUpdatePage.getEtasencodInput()).to.eq('etasencod', 'Expected Etasencod value to be equals to etasencod');
    expect(await senUpdatePage.getSendesproInput()).to.eq('sendespro', 'Expected Sendespro value to be equals to sendespro');
    expect(await senUpdatePage.getPcscodInput()).to.eq('pcscod', 'Expected Pcscod value to be equals to pcscod');
    expect(await senUpdatePage.getCatprocodInput()).to.eq('catprocod', 'Expected Catprocod value to be equals to catprocod');
    expect(await senUpdatePage.getSenrngprtInput()).to.eq('5', 'Expected senrngprt value to be equals to 5');
    expect(await senUpdatePage.getSengrppolcodcouInput()).to.eq(
      'sengrppolcodcou',
      'Expected Sengrppolcodcou value to be equals to sengrppolcodcou'
    );
    expect(await senUpdatePage.getSengrppolliccouInput()).to.eq(
      'sengrppolliccou',
      'Expected Sengrppolliccou value to be equals to sengrppolliccou'
    );
    expect(await senUpdatePage.getSentypappcouInput()).to.eq('sentypappcou', 'Expected Sentypappcou value to be equals to sentypappcou');
    expect(await senUpdatePage.getSencomcodcouInput()).to.eq('sencomcodcou', 'Expected Sencomcodcou value to be equals to sencomcodcou');
    expect(await senUpdatePage.getSencomliccouInput()).to.eq('sencomliccou', 'Expected Sencomliccou value to be equals to sencomliccou');
    expect(await senUpdatePage.getSencirnumcouInput()).to.eq('5', 'Expected sencirnumcou value to be equals to 5');
    expect(await senUpdatePage.getSencircouInput()).to.eq('sencircou', 'Expected Sencircou value to be equals to sencircou');
    expect(await senUpdatePage.getSenburliccouInput()).to.eq('senburliccou', 'Expected Senburliccou value to be equals to senburliccou');
    expect(await senUpdatePage.getSenemaInput()).to.eq('senema', 'Expected Senema value to be equals to senema');
    expect(await senUpdatePage.getSennumtelsenInput()).to.eq('sennumtelsen', 'Expected Sennumtelsen value to be equals to sennumtelsen');
    expect(await senUpdatePage.getSendiplomeInput()).to.eq('sendiplome', 'Expected Sendiplome value to be equals to sendiplome');
    expect(await senUpdatePage.getSendecoraInput()).to.eq('sendecora', 'Expected Sendecora value to be equals to sendecora');
    expect(await senUpdatePage.getSendatpreeleInput()).to.contain(
      '2001-01-01T02:30',
      'Expected sendatpreele value to be equals to 2000-12-31'
    );
    expect(await senUpdatePage.getIndidInput()).to.eq('5', 'Expected indid value to be equals to 5');
    expect(await senUpdatePage.getSennomusecapInput()).to.eq('sennomusecap', 'Expected Sennomusecap value to be equals to sennomusecap');
    expect(await senUpdatePage.getSenpagperInput()).to.eq('senpagper', 'Expected Senpagper value to be equals to senpagper');
    expect(await senUpdatePage.getSenrngprtcodInput()).to.eq('senrngprtcod', 'Expected Senrngprtcod value to be equals to senrngprtcod');
    expect(await senUpdatePage.getParpolorgcodInput()).to.eq('parpolorgcod', 'Expected Parpolorgcod value to be equals to parpolorgcod');
    expect(await senUpdatePage.getSenliedecInput()).to.eq('senliedec', 'Expected Senliedec value to be equals to senliedec');
    expect(await senUpdatePage.getSendptnumnaiInput()).to.eq('5', 'Expected sendptnumnai value to be equals to 5');
    expect(await senUpdatePage.getSendptnumdecInput()).to.eq('5', 'Expected sendptnumdec value to be equals to 5');
    expect(await senUpdatePage.getSenauttraInput()).to.eq('senauttra', 'Expected Senauttra value to be equals to senauttra');
    expect(await senUpdatePage.getSenlogInput()).to.eq('senlog', 'Expected Senlog value to be equals to senlog');
    expect(await senUpdatePage.getSencrinomInput()).to.eq('sencrinom', 'Expected Sencrinom value to be equals to sencrinom');
    expect(await senUpdatePage.getSenfemInput()).to.eq('senfem', 'Expected Senfem value to be equals to senfem');
    expect(await senUpdatePage.getSenautemaInput()).to.eq('senautema', 'Expected Senautema value to be equals to senautema');
    expect(await senUpdatePage.getSenautgrpsenInput()).to.eq('senautgrpsen', 'Expected Senautgrpsen value to be equals to senautgrpsen');
    expect(await senUpdatePage.getSenautpagperInput()).to.eq('senautpagper', 'Expected Senautpagper value to be equals to senautpagper');
    expect(await senUpdatePage.getSennbrqueInput()).to.eq('5', 'Expected sennbrque value to be equals to 5');
    expect(await senUpdatePage.getSennomdisInput()).to.eq('sennomdis', 'Expected Sennomdis value to be equals to sennomdis');
    expect(await senUpdatePage.getNumsenInput()).to.eq('numsen', 'Expected Numsen value to be equals to numsen');
    expect(await senUpdatePage.getSennumsieInput()).to.eq('5', 'Expected sennumsie value to be equals to 5');
    expect(await senUpdatePage.getSennbrvidInput()).to.eq('5', 'Expected sennbrvid value to be equals to 5');
    expect(await senUpdatePage.getSennomditInput()).to.eq('sennomdit', 'Expected Sennomdit value to be equals to sennomdit');
    expect(await senUpdatePage.getTitnobcodInput()).to.eq('titnobcod', 'Expected Titnobcod value to be equals to titnobcod');

    await senUpdatePage.save();
    expect(await senUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await senComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Sen', async () => {
    const nbButtonsBeforeDelete = await senComponentsPage.countDeleteButtons();
    await senComponentsPage.clickOnLastDeleteButton();

    senDeleteDialog = new SenDeleteDialog();
    expect(await senDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Sen?');
    await senDeleteDialog.clickOnConfirmButton();

    expect(await senComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
