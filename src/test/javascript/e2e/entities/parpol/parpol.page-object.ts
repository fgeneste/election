import { element, by, ElementFinder } from 'protractor';

export class ParpolComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-parpol div table .btn-danger'));
  title = element.all(by.css('jhi-parpol div h2#page-heading span')).first();
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

export class ParpolUpdatePage {
  pageTitle = element(by.id('jhi-parpol-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  tenpolcodInput = element(by.id('field_tenpolcod'));
  orgcodInput = element(by.id('field_orgcod'));
  typparpolcodInput = element(by.id('field_typparpolcod'));
  typorgcodInput = element(by.id('field_typorgcod'));
  eveobsInput = element(by.id('field_eveobs'));
  orgartInput = element(by.id('field_orgart'));
  orgnumtriInput = element(by.id('field_orgnumtri'));
  orgdatfinInput = element(by.id('field_orgdatfin'));
  orgnumtieInput = element(by.id('field_orgnumtie'));
  orgurlsimInput = element(by.id('field_orgurlsim'));
  orgurlcmpInput = element(by.id('field_orgurlcmp'));
  orgtemannuInput = element(by.id('field_orgtemannu'));
  evetempubInput = element(by.id('field_evetempub'));
  syscredatInput = element(by.id('field_syscredat'));
  syscrelogInput = element(by.id('field_syscrelog'));
  sysmajdatInput = element(by.id('field_sysmajdat'));
  sysmajlogInput = element(by.id('field_sysmajlog'));
  evelilInput = element(by.id('field_evelil'));
  evelibInput = element(by.id('field_evelib'));
  evelicInput = element(by.id('field_evelic'));
  temvalcodInput = element(by.id('field_temvalcod'));
  orgdatcreInput = element(by.id('field_orgdatcre'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setTenpolcodInput(tenpolcod: string): Promise<void> {
    await this.tenpolcodInput.sendKeys(tenpolcod);
  }

  async getTenpolcodInput(): Promise<string> {
    return await this.tenpolcodInput.getAttribute('value');
  }

  async setOrgcodInput(orgcod: string): Promise<void> {
    await this.orgcodInput.sendKeys(orgcod);
  }

  async getOrgcodInput(): Promise<string> {
    return await this.orgcodInput.getAttribute('value');
  }

  async setTypparpolcodInput(typparpolcod: string): Promise<void> {
    await this.typparpolcodInput.sendKeys(typparpolcod);
  }

  async getTypparpolcodInput(): Promise<string> {
    return await this.typparpolcodInput.getAttribute('value');
  }

  async setTyporgcodInput(typorgcod: string): Promise<void> {
    await this.typorgcodInput.sendKeys(typorgcod);
  }

  async getTyporgcodInput(): Promise<string> {
    return await this.typorgcodInput.getAttribute('value');
  }

  async setEveobsInput(eveobs: string): Promise<void> {
    await this.eveobsInput.sendKeys(eveobs);
  }

  async getEveobsInput(): Promise<string> {
    return await this.eveobsInput.getAttribute('value');
  }

  async setOrgartInput(orgart: string): Promise<void> {
    await this.orgartInput.sendKeys(orgart);
  }

  async getOrgartInput(): Promise<string> {
    return await this.orgartInput.getAttribute('value');
  }

  async setOrgnumtriInput(orgnumtri: string): Promise<void> {
    await this.orgnumtriInput.sendKeys(orgnumtri);
  }

  async getOrgnumtriInput(): Promise<string> {
    return await this.orgnumtriInput.getAttribute('value');
  }

  async setOrgdatfinInput(orgdatfin: string): Promise<void> {
    await this.orgdatfinInput.sendKeys(orgdatfin);
  }

  async getOrgdatfinInput(): Promise<string> {
    return await this.orgdatfinInput.getAttribute('value');
  }

  async setOrgnumtieInput(orgnumtie: string): Promise<void> {
    await this.orgnumtieInput.sendKeys(orgnumtie);
  }

  async getOrgnumtieInput(): Promise<string> {
    return await this.orgnumtieInput.getAttribute('value');
  }

  async setOrgurlsimInput(orgurlsim: string): Promise<void> {
    await this.orgurlsimInput.sendKeys(orgurlsim);
  }

  async getOrgurlsimInput(): Promise<string> {
    return await this.orgurlsimInput.getAttribute('value');
  }

  async setOrgurlcmpInput(orgurlcmp: string): Promise<void> {
    await this.orgurlcmpInput.sendKeys(orgurlcmp);
  }

  async getOrgurlcmpInput(): Promise<string> {
    return await this.orgurlcmpInput.getAttribute('value');
  }

  async setOrgtemannuInput(orgtemannu: string): Promise<void> {
    await this.orgtemannuInput.sendKeys(orgtemannu);
  }

  async getOrgtemannuInput(): Promise<string> {
    return await this.orgtemannuInput.getAttribute('value');
  }

  async setEvetempubInput(evetempub: string): Promise<void> {
    await this.evetempubInput.sendKeys(evetempub);
  }

  async getEvetempubInput(): Promise<string> {
    return await this.evetempubInput.getAttribute('value');
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

  async setEvelilInput(evelil: string): Promise<void> {
    await this.evelilInput.sendKeys(evelil);
  }

  async getEvelilInput(): Promise<string> {
    return await this.evelilInput.getAttribute('value');
  }

  async setEvelibInput(evelib: string): Promise<void> {
    await this.evelibInput.sendKeys(evelib);
  }

  async getEvelibInput(): Promise<string> {
    return await this.evelibInput.getAttribute('value');
  }

  async setEvelicInput(evelic: string): Promise<void> {
    await this.evelicInput.sendKeys(evelic);
  }

  async getEvelicInput(): Promise<string> {
    return await this.evelicInput.getAttribute('value');
  }

  async setTemvalcodInput(temvalcod: string): Promise<void> {
    await this.temvalcodInput.sendKeys(temvalcod);
  }

  async getTemvalcodInput(): Promise<string> {
    return await this.temvalcodInput.getAttribute('value');
  }

  async setOrgdatcreInput(orgdatcre: string): Promise<void> {
    await this.orgdatcreInput.sendKeys(orgdatcre);
  }

  async getOrgdatcreInput(): Promise<string> {
    return await this.orgdatcreInput.getAttribute('value');
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

export class ParpolDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-parpol-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-parpol'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
