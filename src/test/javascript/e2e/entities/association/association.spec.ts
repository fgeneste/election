import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { AssociationComponentsPage, AssociationDeleteDialog, AssociationUpdatePage } from './association.page-object';

const expect = chai.expect;

describe('Association e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let associationComponentsPage: AssociationComponentsPage;
  let associationUpdatePage: AssociationUpdatePage;
  let associationDeleteDialog: AssociationDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Associations', async () => {
    await navBarPage.goToEntity('association');
    associationComponentsPage = new AssociationComponentsPage();
    await browser.wait(ec.visibilityOf(associationComponentsPage.title), 5000);
    expect(await associationComponentsPage.getTitle()).to.eq('Associations');
    await browser.wait(
      ec.or(ec.visibilityOf(associationComponentsPage.entities), ec.visibilityOf(associationComponentsPage.noResult)),
      1000
    );
  });

  it('should load create Association page', async () => {
    await associationComponentsPage.clickOnCreateButton();
    associationUpdatePage = new AssociationUpdatePage();
    expect(await associationUpdatePage.getPageTitle()).to.eq('Create or edit a Association');
    await associationUpdatePage.cancel();
  });

  it('should create and save Associations', async () => {
    const nbButtonsBeforeCreate = await associationComponentsPage.countDeleteButtons();

    await associationComponentsPage.clickOnCreateButton();

    await promise.all([
      associationUpdatePage.setScoreInput('5'),
      associationUpdatePage.candidatSelectLastOption(),
      associationUpdatePage.senSelectLastOption(),
    ]);

    expect(await associationUpdatePage.getScoreInput()).to.eq('5', 'Expected score value to be equals to 5');

    await associationUpdatePage.save();
    expect(await associationUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await associationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Association', async () => {
    const nbButtonsBeforeDelete = await associationComponentsPage.countDeleteButtons();
    await associationComponentsPage.clickOnLastDeleteButton();

    associationDeleteDialog = new AssociationDeleteDialog();
    expect(await associationDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Association?');
    await associationDeleteDialog.clickOnConfirmButton();

    expect(await associationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
