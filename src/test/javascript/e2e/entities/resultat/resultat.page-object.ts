import { element, by, ElementFinder } from 'protractor';

export class ResultatComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-resultat div table .btn-danger'));
  title = element.all(by.css('jhi-resultat div h2#page-heading span')).first();
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

export class ResultatUpdatePage {
  pageTitle = element(by.id('jhi-resultat-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  dateExportInput = element(by.id('field_dateExport'));
  numeroDepartementInput = element(by.id('field_numeroDepartement'));
  libelleDepartementInput = element(by.id('field_libelleDepartement'));
  noTourInput = element(by.id('field_noTour'));
  inscritsInput = element(by.id('field_inscrits'));
  abstentionsInput = element(by.id('field_abstentions'));
  absOnInsInput = element(by.id('field_absOnIns'));
  votantsInput = element(by.id('field_votants'));
  votOnInsInput = element(by.id('field_votOnIns'));
  blancsInput = element(by.id('field_blancs'));
  blancsOnInsInput = element(by.id('field_blancsOnIns'));
  blancsOnVotInput = element(by.id('field_blancsOnVot'));
  nulsInput = element(by.id('field_nuls'));
  nulsOnInsInput = element(by.id('field_nulsOnIns'));
  nulsOnVotInput = element(by.id('field_nulsOnVot'));
  exprimeInput = element(by.id('field_exprime'));
  expOnInsInput = element(by.id('field_expOnIns'));
  expOnVotInput = element(by.id('field_expOnVot'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setDateExportInput(dateExport: string): Promise<void> {
    await this.dateExportInput.sendKeys(dateExport);
  }

  async getDateExportInput(): Promise<string> {
    return await this.dateExportInput.getAttribute('value');
  }

  async setNumeroDepartementInput(numeroDepartement: string): Promise<void> {
    await this.numeroDepartementInput.sendKeys(numeroDepartement);
  }

  async getNumeroDepartementInput(): Promise<string> {
    return await this.numeroDepartementInput.getAttribute('value');
  }

  async setLibelleDepartementInput(libelleDepartement: string): Promise<void> {
    await this.libelleDepartementInput.sendKeys(libelleDepartement);
  }

  async getLibelleDepartementInput(): Promise<string> {
    return await this.libelleDepartementInput.getAttribute('value');
  }

  async setNoTourInput(noTour: string): Promise<void> {
    await this.noTourInput.sendKeys(noTour);
  }

  async getNoTourInput(): Promise<string> {
    return await this.noTourInput.getAttribute('value');
  }

  async setInscritsInput(inscrits: string): Promise<void> {
    await this.inscritsInput.sendKeys(inscrits);
  }

  async getInscritsInput(): Promise<string> {
    return await this.inscritsInput.getAttribute('value');
  }

  async setAbstentionsInput(abstentions: string): Promise<void> {
    await this.abstentionsInput.sendKeys(abstentions);
  }

  async getAbstentionsInput(): Promise<string> {
    return await this.abstentionsInput.getAttribute('value');
  }

  async setAbsOnInsInput(absOnIns: string): Promise<void> {
    await this.absOnInsInput.sendKeys(absOnIns);
  }

  async getAbsOnInsInput(): Promise<string> {
    return await this.absOnInsInput.getAttribute('value');
  }

  async setVotantsInput(votants: string): Promise<void> {
    await this.votantsInput.sendKeys(votants);
  }

  async getVotantsInput(): Promise<string> {
    return await this.votantsInput.getAttribute('value');
  }

  async setVotOnInsInput(votOnIns: string): Promise<void> {
    await this.votOnInsInput.sendKeys(votOnIns);
  }

  async getVotOnInsInput(): Promise<string> {
    return await this.votOnInsInput.getAttribute('value');
  }

  async setBlancsInput(blancs: string): Promise<void> {
    await this.blancsInput.sendKeys(blancs);
  }

  async getBlancsInput(): Promise<string> {
    return await this.blancsInput.getAttribute('value');
  }

  async setBlancsOnInsInput(blancsOnIns: string): Promise<void> {
    await this.blancsOnInsInput.sendKeys(blancsOnIns);
  }

  async getBlancsOnInsInput(): Promise<string> {
    return await this.blancsOnInsInput.getAttribute('value');
  }

  async setBlancsOnVotInput(blancsOnVot: string): Promise<void> {
    await this.blancsOnVotInput.sendKeys(blancsOnVot);
  }

  async getBlancsOnVotInput(): Promise<string> {
    return await this.blancsOnVotInput.getAttribute('value');
  }

  async setNulsInput(nuls: string): Promise<void> {
    await this.nulsInput.sendKeys(nuls);
  }

  async getNulsInput(): Promise<string> {
    return await this.nulsInput.getAttribute('value');
  }

  async setNulsOnInsInput(nulsOnIns: string): Promise<void> {
    await this.nulsOnInsInput.sendKeys(nulsOnIns);
  }

  async getNulsOnInsInput(): Promise<string> {
    return await this.nulsOnInsInput.getAttribute('value');
  }

  async setNulsOnVotInput(nulsOnVot: string): Promise<void> {
    await this.nulsOnVotInput.sendKeys(nulsOnVot);
  }

  async getNulsOnVotInput(): Promise<string> {
    return await this.nulsOnVotInput.getAttribute('value');
  }

  async setExprimeInput(exprime: string): Promise<void> {
    await this.exprimeInput.sendKeys(exprime);
  }

  async getExprimeInput(): Promise<string> {
    return await this.exprimeInput.getAttribute('value');
  }

  async setExpOnInsInput(expOnIns: string): Promise<void> {
    await this.expOnInsInput.sendKeys(expOnIns);
  }

  async getExpOnInsInput(): Promise<string> {
    return await this.expOnInsInput.getAttribute('value');
  }

  async setExpOnVotInput(expOnVot: string): Promise<void> {
    await this.expOnVotInput.sendKeys(expOnVot);
  }

  async getExpOnVotInput(): Promise<string> {
    return await this.expOnVotInput.getAttribute('value');
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

export class ResultatDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-resultat-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-resultat'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
