import { element, by, ElementFinder } from 'protractor';

export class AssociationComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-association div table .btn-danger'));
  title = element.all(by.css('jhi-association div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getText();
  }
}

export class AssociationUpdatePage {
  pageTitle = element(by.id('jhi-association-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  scoreInput = element(by.id('field_score'));

  candidatSelect = element(by.id('field_candidat'));
  senSelect = element(by.id('field_sen'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setScoreInput(score: string): Promise<void> {
    await this.scoreInput.sendKeys(score);
  }

  async getScoreInput(): Promise<string> {
    return await this.scoreInput.getAttribute('value');
  }

  async candidatSelectLastOption(): Promise<void> {
    await this.candidatSelect.all(by.tagName('option')).last().click();
  }

  async candidatSelectOption(option: string): Promise<void> {
    await this.candidatSelect.sendKeys(option);
  }

  getCandidatSelect(): ElementFinder {
    return this.candidatSelect;
  }

  async getCandidatSelectedOption(): Promise<string> {
    return await this.candidatSelect.element(by.css('option:checked')).getText();
  }

  async senSelectLastOption(): Promise<void> {
    await this.senSelect.all(by.tagName('option')).last().click();
  }

  async senSelectOption(option: string): Promise<void> {
    await this.senSelect.sendKeys(option);
  }

  getSenSelect(): ElementFinder {
    return this.senSelect;
  }

  async getSenSelectedOption(): Promise<string> {
    return await this.senSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class AssociationDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-association-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-association'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
