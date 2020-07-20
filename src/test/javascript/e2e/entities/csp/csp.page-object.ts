import { element, by, ElementFinder } from 'protractor';

export class CspComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-csp div table .btn-danger'));
  title = element.all(by.css('jhi-csp div h2#page-heading span')).first();
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

export class CspUpdatePage {
  pageTitle = element(by.id('jhi-csp-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  cspcodInput = element(by.id('field_cspcod'));
  catprocodInput = element(by.id('field_catprocod'));
  cspfamcodInput = element(by.id('field_cspfamcod'));
  csplibInput = element(by.id('field_csplib'));
  cspnumtriInput = element(by.id('field_cspnumtri'));
  syscredatInput = element(by.id('field_syscredat'));
  syscrelogInput = element(by.id('field_syscrelog'));
  sysmajdatInput = element(by.id('field_sysmajdat'));
  sysmajlogInput = element(by.id('field_sysmajlog'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setCspcodInput(cspcod: string): Promise<void> {
    await this.cspcodInput.sendKeys(cspcod);
  }

  async getCspcodInput(): Promise<string> {
    return await this.cspcodInput.getAttribute('value');
  }

  async setCatprocodInput(catprocod: string): Promise<void> {
    await this.catprocodInput.sendKeys(catprocod);
  }

  async getCatprocodInput(): Promise<string> {
    return await this.catprocodInput.getAttribute('value');
  }

  async setCspfamcodInput(cspfamcod: string): Promise<void> {
    await this.cspfamcodInput.sendKeys(cspfamcod);
  }

  async getCspfamcodInput(): Promise<string> {
    return await this.cspfamcodInput.getAttribute('value');
  }

  async setCsplibInput(csplib: string): Promise<void> {
    await this.csplibInput.sendKeys(csplib);
  }

  async getCsplibInput(): Promise<string> {
    return await this.csplibInput.getAttribute('value');
  }

  async setCspnumtriInput(cspnumtri: string): Promise<void> {
    await this.cspnumtriInput.sendKeys(cspnumtri);
  }

  async getCspnumtriInput(): Promise<string> {
    return await this.cspnumtriInput.getAttribute('value');
  }

  async setSyscredatInput(syscredat: string): Promise<void> {
    await this.syscredatInput.sendKeys(syscredat);
  }

  async getSyscredatInput(): Promise<string> {
    return await this.syscredatInput.getAttribute('value');
  }

  async setSyscrelogInput(syscrelog: string): Promise<void> {
    await this.syscrelogInput.sendKeys(syscrelog);
  }

  async getSyscrelogInput(): Promise<string> {
    return await this.syscrelogInput.getAttribute('value');
  }

  async setSysmajdatInput(sysmajdat: string): Promise<void> {
    await this.sysmajdatInput.sendKeys(sysmajdat);
  }

  async getSysmajdatInput(): Promise<string> {
    return await this.sysmajdatInput.getAttribute('value');
  }

  async setSysmajlogInput(sysmajlog: string): Promise<void> {
    await this.sysmajlogInput.sendKeys(sysmajlog);
  }

  async getSysmajlogInput(): Promise<string> {
    return await this.sysmajlogInput.getAttribute('value');
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

export class CspDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-csp-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-csp'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
