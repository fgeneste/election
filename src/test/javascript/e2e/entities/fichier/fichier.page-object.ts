import { element, by, ElementFinder } from 'protractor';

export class FichierComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-fichier div table .btn-danger'));
  title = element.all(by.css('jhi-fichier div h2#page-heading span')).first();
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

export class FichierUpdatePage {
  pageTitle = element(by.id('jhi-fichier-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  filenameInput = element(by.id('field_filename'));
  pathInput = element(by.id('field_path'));
  typeInput = element(by.id('field_type'));
  traiteInput = element(by.id('field_traite'));
  dateTraitementInput = element(by.id('field_dateTraitement'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setFilenameInput(filename: string): Promise<void> {
    await this.filenameInput.sendKeys(filename);
  }

  async getFilenameInput(): Promise<string> {
    return await this.filenameInput.getAttribute('value');
  }

  async setPathInput(path: string): Promise<void> {
    await this.pathInput.sendKeys(path);
  }

  async getPathInput(): Promise<string> {
    return await this.pathInput.getAttribute('value');
  }

  async setTypeInput(type: string): Promise<void> {
    await this.typeInput.sendKeys(type);
  }

  async getTypeInput(): Promise<string> {
    return await this.typeInput.getAttribute('value');
  }

  getTraiteInput(): ElementFinder {
    return this.traiteInput;
  }

  async setDateTraitementInput(dateTraitement: string): Promise<void> {
    await this.dateTraitementInput.sendKeys(dateTraitement);
  }

  async getDateTraitementInput(): Promise<string> {
    return await this.dateTraitementInput.getAttribute('value');
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

export class FichierDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-fichier-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-fichier'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
