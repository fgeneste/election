import { element, by, ElementFinder } from 'protractor';

export class FoncandidComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-foncandid div table .btn-danger'));
  title = element.all(by.css('jhi-foncandid div h2#page-heading span')).first();
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

export class FoncandidUpdatePage {
  pageTitle = element(by.id('jhi-foncandid-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  foncandidcodInput = element(by.id('field_foncandidcod'));
  foncandidlibfemInput = element(by.id('field_foncandidlibfem'));
  foncandidlibInput = element(by.id('field_foncandidlib'));
  foncandidlicInput = element(by.id('field_foncandidlic'));
  foncandidlicfemInput = element(by.id('field_foncandidlicfem'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setFoncandidcodInput(foncandidcod: string): Promise<void> {
    await this.foncandidcodInput.sendKeys(foncandidcod);
  }

  async getFoncandidcodInput(): Promise<string> {
    return await this.foncandidcodInput.getAttribute('value');
  }

  async setFoncandidlibfemInput(foncandidlibfem: string): Promise<void> {
    await this.foncandidlibfemInput.sendKeys(foncandidlibfem);
  }

  async getFoncandidlibfemInput(): Promise<string> {
    return await this.foncandidlibfemInput.getAttribute('value');
  }

  async setFoncandidlibInput(foncandidlib: string): Promise<void> {
    await this.foncandidlibInput.sendKeys(foncandidlib);
  }

  async getFoncandidlibInput(): Promise<string> {
    return await this.foncandidlibInput.getAttribute('value');
  }

  async setFoncandidlicInput(foncandidlic: string): Promise<void> {
    await this.foncandidlicInput.sendKeys(foncandidlic);
  }

  async getFoncandidlicInput(): Promise<string> {
    return await this.foncandidlicInput.getAttribute('value');
  }

  async setFoncandidlicfemInput(foncandidlicfem: string): Promise<void> {
    await this.foncandidlicfemInput.sendKeys(foncandidlicfem);
  }

  async getFoncandidlicfemInput(): Promise<string> {
    return await this.foncandidlicfemInput.getAttribute('value');
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

export class FoncandidDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-foncandid-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-foncandid'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
