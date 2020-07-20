import { element, by, ElementFinder } from 'protractor';

export class DptComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-dpt div table .btn-danger'));
  title = element.all(by.css('jhi-dpt div h2#page-heading span')).first();
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

export class DptUpdatePage {
  pageTitle = element(by.id('jhi-dpt-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  dptnumInput = element(by.id('field_dptnum'));
  dptcodInput = element(by.id('field_dptcod'));
  dptlibInput = element(by.id('field_dptlib'));
  dptnbrsenInput = element(by.id('field_dptnbrsen'));
  dptmodscrsenInput = element(by.id('field_dptmodscrsen'));
  dptserInput = element(by.id('field_dptser'));
  regcodInput = element(by.id('field_regcod'));
  dptnumtriInput = element(by.id('field_dptnumtri'));
  dptcodsirpasInput = element(by.id('field_dptcodsirpas'));
  dptlicInput = element(by.id('field_dptlic'));
  dptartInput = element(by.id('field_dptart'));
  dptlibtriInput = element(by.id('field_dptlibtri'));
  temvalcodInput = element(by.id('field_temvalcod'));
  evelicInput = element(by.id('field_evelic'));
  evelibInput = element(by.id('field_evelib'));
  evelilInput = element(by.id('field_evelil'));
  eveobsInput = element(by.id('field_eveobs'));
  dptser2004Input = element(by.id('field_dptser2004'));
  dptcmtInput = element(by.id('field_dptcmt'));
  dptcmtaffInput = element(by.id('field_dptcmtaff'));
  dptdatdebInput = element(by.id('field_dptdatdeb'));
  dptdatfinInput = element(by.id('field_dptdatfin'));
  evetempubInput = element(by.id('field_evetempub'));
  dpturlcmpInput = element(by.id('field_dpturlcmp'));
  dptminintcodInput = element(by.id('field_dptminintcod'));
  syscredatInput = element(by.id('field_syscredat'));
  syscrelogInput = element(by.id('field_syscrelog'));
  sysmajdatInput = element(by.id('field_sysmajdat'));
  sysmajlogInput = element(by.id('field_sysmajlog'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setDptnumInput(dptnum: string): Promise<void> {
    await this.dptnumInput.sendKeys(dptnum);
  }

  async getDptnumInput(): Promise<string> {
    return await this.dptnumInput.getAttribute('value');
  }

  async setDptcodInput(dptcod: string): Promise<void> {
    await this.dptcodInput.sendKeys(dptcod);
  }

  async getDptcodInput(): Promise<string> {
    return await this.dptcodInput.getAttribute('value');
  }

  async setDptlibInput(dptlib: string): Promise<void> {
    await this.dptlibInput.sendKeys(dptlib);
  }

  async getDptlibInput(): Promise<string> {
    return await this.dptlibInput.getAttribute('value');
  }

  async setDptnbrsenInput(dptnbrsen: string): Promise<void> {
    await this.dptnbrsenInput.sendKeys(dptnbrsen);
  }

  async getDptnbrsenInput(): Promise<string> {
    return await this.dptnbrsenInput.getAttribute('value');
  }

  async setDptmodscrsenInput(dptmodscrsen: string): Promise<void> {
    await this.dptmodscrsenInput.sendKeys(dptmodscrsen);
  }

  async getDptmodscrsenInput(): Promise<string> {
    return await this.dptmodscrsenInput.getAttribute('value');
  }

  async setDptserInput(dptser: string): Promise<void> {
    await this.dptserInput.sendKeys(dptser);
  }

  async getDptserInput(): Promise<string> {
    return await this.dptserInput.getAttribute('value');
  }

  async setRegcodInput(regcod: string): Promise<void> {
    await this.regcodInput.sendKeys(regcod);
  }

  async getRegcodInput(): Promise<string> {
    return await this.regcodInput.getAttribute('value');
  }

  async setDptnumtriInput(dptnumtri: string): Promise<void> {
    await this.dptnumtriInput.sendKeys(dptnumtri);
  }

  async getDptnumtriInput(): Promise<string> {
    return await this.dptnumtriInput.getAttribute('value');
  }

  async setDptcodsirpasInput(dptcodsirpas: string): Promise<void> {
    await this.dptcodsirpasInput.sendKeys(dptcodsirpas);
  }

  async getDptcodsirpasInput(): Promise<string> {
    return await this.dptcodsirpasInput.getAttribute('value');
  }

  async setDptlicInput(dptlic: string): Promise<void> {
    await this.dptlicInput.sendKeys(dptlic);
  }

  async getDptlicInput(): Promise<string> {
    return await this.dptlicInput.getAttribute('value');
  }

  async setDptartInput(dptart: string): Promise<void> {
    await this.dptartInput.sendKeys(dptart);
  }

  async getDptartInput(): Promise<string> {
    return await this.dptartInput.getAttribute('value');
  }

  async setDptlibtriInput(dptlibtri: string): Promise<void> {
    await this.dptlibtriInput.sendKeys(dptlibtri);
  }

  async getDptlibtriInput(): Promise<string> {
    return await this.dptlibtriInput.getAttribute('value');
  }

  async setTemvalcodInput(temvalcod: string): Promise<void> {
    await this.temvalcodInput.sendKeys(temvalcod);
  }

  async getTemvalcodInput(): Promise<string> {
    return await this.temvalcodInput.getAttribute('value');
  }

  async setEvelicInput(evelic: string): Promise<void> {
    await this.evelicInput.sendKeys(evelic);
  }

  async getEvelicInput(): Promise<string> {
    return await this.evelicInput.getAttribute('value');
  }

  async setEvelibInput(evelib: string): Promise<void> {
    await this.evelibInput.sendKeys(evelib);
  }

  async getEvelibInput(): Promise<string> {
    return await this.evelibInput.getAttribute('value');
  }

  async setEvelilInput(evelil: string): Promise<void> {
    await this.evelilInput.sendKeys(evelil);
  }

  async getEvelilInput(): Promise<string> {
    return await this.evelilInput.getAttribute('value');
  }

  async setEveobsInput(eveobs: string): Promise<void> {
    await this.eveobsInput.sendKeys(eveobs);
  }

  async getEveobsInput(): Promise<string> {
    return await this.eveobsInput.getAttribute('value');
  }

  async setDptser2004Input(dptser2004: string): Promise<void> {
    await this.dptser2004Input.sendKeys(dptser2004);
  }

  async getDptser2004Input(): Promise<string> {
    return await this.dptser2004Input.getAttribute('value');
  }

  async setDptcmtInput(dptcmt: string): Promise<void> {
    await this.dptcmtInput.sendKeys(dptcmt);
  }

  async getDptcmtInput(): Promise<string> {
    return await this.dptcmtInput.getAttribute('value');
  }

  async setDptcmtaffInput(dptcmtaff: string): Promise<void> {
    await this.dptcmtaffInput.sendKeys(dptcmtaff);
  }

  async getDptcmtaffInput(): Promise<string> {
    return await this.dptcmtaffInput.getAttribute('value');
  }

  async setDptdatdebInput(dptdatdeb: string): Promise<void> {
    await this.dptdatdebInput.sendKeys(dptdatdeb);
  }

  async getDptdatdebInput(): Promise<string> {
    return await this.dptdatdebInput.getAttribute('value');
  }

  async setDptdatfinInput(dptdatfin: string): Promise<void> {
    await this.dptdatfinInput.sendKeys(dptdatfin);
  }

  async getDptdatfinInput(): Promise<string> {
    return await this.dptdatfinInput.getAttribute('value');
  }

  async setEvetempubInput(evetempub: string): Promise<void> {
    await this.evetempubInput.sendKeys(evetempub);
  }

  async getEvetempubInput(): Promise<string> {
    return await this.evetempubInput.getAttribute('value');
  }

  async setDpturlcmpInput(dpturlcmp: string): Promise<void> {
    await this.dpturlcmpInput.sendKeys(dpturlcmp);
  }

  async getDpturlcmpInput(): Promise<string> {
    return await this.dpturlcmpInput.getAttribute('value');
  }

  async setDptminintcodInput(dptminintcod: string): Promise<void> {
    await this.dptminintcodInput.sendKeys(dptminintcod);
  }

  async getDptminintcodInput(): Promise<string> {
    return await this.dptminintcodInput.getAttribute('value');
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

export class DptDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-dpt-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-dpt'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
