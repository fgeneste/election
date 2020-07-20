import { element, by, ElementFinder } from 'protractor';

export class SenComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-sen div table .btn-danger'));
  title = element.all(by.css('jhi-sen div h2#page-heading span')).first();
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

export class SenUpdatePage {
  pageTitle = element(by.id('jhi-sen-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  senmatInput = element(by.id('field_senmat'));
  quacodInput = element(by.id('field_quacod'));
  sennomuseInput = element(by.id('field_sennomuse'));
  sennompatInput = element(by.id('field_sennompat'));
  sennommarInput = element(by.id('field_sennommar'));
  sennomtecInput = element(by.id('field_sennomtec'));
  senprenomuseInput = element(by.id('field_senprenomuse'));
  senprenomcivInput = element(by.id('field_senprenomciv'));
  sendatnaiInput = element(by.id('field_sendatnai'));
  senlienaiInput = element(by.id('field_senlienai'));
  sendatdecInput = element(by.id('field_sendatdec'));
  etasencodInput = element(by.id('field_etasencod'));
  sendesproInput = element(by.id('field_sendespro'));
  pcscodInput = element(by.id('field_pcscod'));
  catprocodInput = element(by.id('field_catprocod'));
  senrngprtInput = element(by.id('field_senrngprt'));
  sengrppolcodcouInput = element(by.id('field_sengrppolcodcou'));
  sengrppolliccouInput = element(by.id('field_sengrppolliccou'));
  sentypappcouInput = element(by.id('field_sentypappcou'));
  sencomcodcouInput = element(by.id('field_sencomcodcou'));
  sencomliccouInput = element(by.id('field_sencomliccou'));
  sencirnumcouInput = element(by.id('field_sencirnumcou'));
  sencircouInput = element(by.id('field_sencircou'));
  senburliccouInput = element(by.id('field_senburliccou'));
  senemaInput = element(by.id('field_senema'));
  sennumtelsenInput = element(by.id('field_sennumtelsen'));
  sendiplomeInput = element(by.id('field_sendiplome'));
  sendecoraInput = element(by.id('field_sendecora'));
  sendatpreeleInput = element(by.id('field_sendatpreele'));
  indidInput = element(by.id('field_indid'));
  sennomusecapInput = element(by.id('field_sennomusecap'));
  senpagperInput = element(by.id('field_senpagper'));
  senrngprtcodInput = element(by.id('field_senrngprtcod'));
  parpolorgcodInput = element(by.id('field_parpolorgcod'));
  senliedecInput = element(by.id('field_senliedec'));
  sendptnumnaiInput = element(by.id('field_sendptnumnai'));
  sendptnumdecInput = element(by.id('field_sendptnumdec'));
  senauttraInput = element(by.id('field_senauttra'));
  senlogInput = element(by.id('field_senlog'));
  sencrinomInput = element(by.id('field_sencrinom'));
  senfemInput = element(by.id('field_senfem'));
  senautemaInput = element(by.id('field_senautema'));
  senautgrpsenInput = element(by.id('field_senautgrpsen'));
  senautpagperInput = element(by.id('field_senautpagper'));
  sennbrqueInput = element(by.id('field_sennbrque'));
  sennomdisInput = element(by.id('field_sennomdis'));
  numsenInput = element(by.id('field_numsen'));
  sennumsieInput = element(by.id('field_sennumsie'));
  sennbrvidInput = element(by.id('field_sennbrvid'));
  sennomditInput = element(by.id('field_sennomdit'));
  titnobcodInput = element(by.id('field_titnobcod'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setSenmatInput(senmat: string): Promise<void> {
    await this.senmatInput.sendKeys(senmat);
  }

  async getSenmatInput(): Promise<string> {
    return await this.senmatInput.getAttribute('value');
  }

  async setQuacodInput(quacod: string): Promise<void> {
    await this.quacodInput.sendKeys(quacod);
  }

  async getQuacodInput(): Promise<string> {
    return await this.quacodInput.getAttribute('value');
  }

  async setSennomuseInput(sennomuse: string): Promise<void> {
    await this.sennomuseInput.sendKeys(sennomuse);
  }

  async getSennomuseInput(): Promise<string> {
    return await this.sennomuseInput.getAttribute('value');
  }

  async setSennompatInput(sennompat: string): Promise<void> {
    await this.sennompatInput.sendKeys(sennompat);
  }

  async getSennompatInput(): Promise<string> {
    return await this.sennompatInput.getAttribute('value');
  }

  async setSennommarInput(sennommar: string): Promise<void> {
    await this.sennommarInput.sendKeys(sennommar);
  }

  async getSennommarInput(): Promise<string> {
    return await this.sennommarInput.getAttribute('value');
  }

  async setSennomtecInput(sennomtec: string): Promise<void> {
    await this.sennomtecInput.sendKeys(sennomtec);
  }

  async getSennomtecInput(): Promise<string> {
    return await this.sennomtecInput.getAttribute('value');
  }

  async setSenprenomuseInput(senprenomuse: string): Promise<void> {
    await this.senprenomuseInput.sendKeys(senprenomuse);
  }

  async getSenprenomuseInput(): Promise<string> {
    return await this.senprenomuseInput.getAttribute('value');
  }

  async setSenprenomcivInput(senprenomciv: string): Promise<void> {
    await this.senprenomcivInput.sendKeys(senprenomciv);
  }

  async getSenprenomcivInput(): Promise<string> {
    return await this.senprenomcivInput.getAttribute('value');
  }

  async setSendatnaiInput(sendatnai: string): Promise<void> {
    await this.sendatnaiInput.sendKeys(sendatnai);
  }

  async getSendatnaiInput(): Promise<string> {
    return await this.sendatnaiInput.getAttribute('value');
  }

  async setSenlienaiInput(senlienai: string): Promise<void> {
    await this.senlienaiInput.sendKeys(senlienai);
  }

  async getSenlienaiInput(): Promise<string> {
    return await this.senlienaiInput.getAttribute('value');
  }

  async setSendatdecInput(sendatdec: string): Promise<void> {
    await this.sendatdecInput.sendKeys(sendatdec);
  }

  async getSendatdecInput(): Promise<string> {
    return await this.sendatdecInput.getAttribute('value');
  }

  async setEtasencodInput(etasencod: string): Promise<void> {
    await this.etasencodInput.sendKeys(etasencod);
  }

  async getEtasencodInput(): Promise<string> {
    return await this.etasencodInput.getAttribute('value');
  }

  async setSendesproInput(sendespro: string): Promise<void> {
    await this.sendesproInput.sendKeys(sendespro);
  }

  async getSendesproInput(): Promise<string> {
    return await this.sendesproInput.getAttribute('value');
  }

  async setPcscodInput(pcscod: string): Promise<void> {
    await this.pcscodInput.sendKeys(pcscod);
  }

  async getPcscodInput(): Promise<string> {
    return await this.pcscodInput.getAttribute('value');
  }

  async setCatprocodInput(catprocod: string): Promise<void> {
    await this.catprocodInput.sendKeys(catprocod);
  }

  async getCatprocodInput(): Promise<string> {
    return await this.catprocodInput.getAttribute('value');
  }

  async setSenrngprtInput(senrngprt: string): Promise<void> {
    await this.senrngprtInput.sendKeys(senrngprt);
  }

  async getSenrngprtInput(): Promise<string> {
    return await this.senrngprtInput.getAttribute('value');
  }

  async setSengrppolcodcouInput(sengrppolcodcou: string): Promise<void> {
    await this.sengrppolcodcouInput.sendKeys(sengrppolcodcou);
  }

  async getSengrppolcodcouInput(): Promise<string> {
    return await this.sengrppolcodcouInput.getAttribute('value');
  }

  async setSengrppolliccouInput(sengrppolliccou: string): Promise<void> {
    await this.sengrppolliccouInput.sendKeys(sengrppolliccou);
  }

  async getSengrppolliccouInput(): Promise<string> {
    return await this.sengrppolliccouInput.getAttribute('value');
  }

  async setSentypappcouInput(sentypappcou: string): Promise<void> {
    await this.sentypappcouInput.sendKeys(sentypappcou);
  }

  async getSentypappcouInput(): Promise<string> {
    return await this.sentypappcouInput.getAttribute('value');
  }

  async setSencomcodcouInput(sencomcodcou: string): Promise<void> {
    await this.sencomcodcouInput.sendKeys(sencomcodcou);
  }

  async getSencomcodcouInput(): Promise<string> {
    return await this.sencomcodcouInput.getAttribute('value');
  }

  async setSencomliccouInput(sencomliccou: string): Promise<void> {
    await this.sencomliccouInput.sendKeys(sencomliccou);
  }

  async getSencomliccouInput(): Promise<string> {
    return await this.sencomliccouInput.getAttribute('value');
  }

  async setSencirnumcouInput(sencirnumcou: string): Promise<void> {
    await this.sencirnumcouInput.sendKeys(sencirnumcou);
  }

  async getSencirnumcouInput(): Promise<string> {
    return await this.sencirnumcouInput.getAttribute('value');
  }

  async setSencircouInput(sencircou: string): Promise<void> {
    await this.sencircouInput.sendKeys(sencircou);
  }

  async getSencircouInput(): Promise<string> {
    return await this.sencircouInput.getAttribute('value');
  }

  async setSenburliccouInput(senburliccou: string): Promise<void> {
    await this.senburliccouInput.sendKeys(senburliccou);
  }

  async getSenburliccouInput(): Promise<string> {
    return await this.senburliccouInput.getAttribute('value');
  }

  async setSenemaInput(senema: string): Promise<void> {
    await this.senemaInput.sendKeys(senema);
  }

  async getSenemaInput(): Promise<string> {
    return await this.senemaInput.getAttribute('value');
  }

  async setSennumtelsenInput(sennumtelsen: string): Promise<void> {
    await this.sennumtelsenInput.sendKeys(sennumtelsen);
  }

  async getSennumtelsenInput(): Promise<string> {
    return await this.sennumtelsenInput.getAttribute('value');
  }

  async setSendiplomeInput(sendiplome: string): Promise<void> {
    await this.sendiplomeInput.sendKeys(sendiplome);
  }

  async getSendiplomeInput(): Promise<string> {
    return await this.sendiplomeInput.getAttribute('value');
  }

  async setSendecoraInput(sendecora: string): Promise<void> {
    await this.sendecoraInput.sendKeys(sendecora);
  }

  async getSendecoraInput(): Promise<string> {
    return await this.sendecoraInput.getAttribute('value');
  }

  async setSendatpreeleInput(sendatpreele: string): Promise<void> {
    await this.sendatpreeleInput.sendKeys(sendatpreele);
  }

  async getSendatpreeleInput(): Promise<string> {
    return await this.sendatpreeleInput.getAttribute('value');
  }

  async setIndidInput(indid: string): Promise<void> {
    await this.indidInput.sendKeys(indid);
  }

  async getIndidInput(): Promise<string> {
    return await this.indidInput.getAttribute('value');
  }

  async setSennomusecapInput(sennomusecap: string): Promise<void> {
    await this.sennomusecapInput.sendKeys(sennomusecap);
  }

  async getSennomusecapInput(): Promise<string> {
    return await this.sennomusecapInput.getAttribute('value');
  }

  async setSenpagperInput(senpagper: string): Promise<void> {
    await this.senpagperInput.sendKeys(senpagper);
  }

  async getSenpagperInput(): Promise<string> {
    return await this.senpagperInput.getAttribute('value');
  }

  async setSenrngprtcodInput(senrngprtcod: string): Promise<void> {
    await this.senrngprtcodInput.sendKeys(senrngprtcod);
  }

  async getSenrngprtcodInput(): Promise<string> {
    return await this.senrngprtcodInput.getAttribute('value');
  }

  async setParpolorgcodInput(parpolorgcod: string): Promise<void> {
    await this.parpolorgcodInput.sendKeys(parpolorgcod);
  }

  async getParpolorgcodInput(): Promise<string> {
    return await this.parpolorgcodInput.getAttribute('value');
  }

  async setSenliedecInput(senliedec: string): Promise<void> {
    await this.senliedecInput.sendKeys(senliedec);
  }

  async getSenliedecInput(): Promise<string> {
    return await this.senliedecInput.getAttribute('value');
  }

  async setSendptnumnaiInput(sendptnumnai: string): Promise<void> {
    await this.sendptnumnaiInput.sendKeys(sendptnumnai);
  }

  async getSendptnumnaiInput(): Promise<string> {
    return await this.sendptnumnaiInput.getAttribute('value');
  }

  async setSendptnumdecInput(sendptnumdec: string): Promise<void> {
    await this.sendptnumdecInput.sendKeys(sendptnumdec);
  }

  async getSendptnumdecInput(): Promise<string> {
    return await this.sendptnumdecInput.getAttribute('value');
  }

  async setSenauttraInput(senauttra: string): Promise<void> {
    await this.senauttraInput.sendKeys(senauttra);
  }

  async getSenauttraInput(): Promise<string> {
    return await this.senauttraInput.getAttribute('value');
  }

  async setSenlogInput(senlog: string): Promise<void> {
    await this.senlogInput.sendKeys(senlog);
  }

  async getSenlogInput(): Promise<string> {
    return await this.senlogInput.getAttribute('value');
  }

  async setSencrinomInput(sencrinom: string): Promise<void> {
    await this.sencrinomInput.sendKeys(sencrinom);
  }

  async getSencrinomInput(): Promise<string> {
    return await this.sencrinomInput.getAttribute('value');
  }

  async setSenfemInput(senfem: string): Promise<void> {
    await this.senfemInput.sendKeys(senfem);
  }

  async getSenfemInput(): Promise<string> {
    return await this.senfemInput.getAttribute('value');
  }

  async setSenautemaInput(senautema: string): Promise<void> {
    await this.senautemaInput.sendKeys(senautema);
  }

  async getSenautemaInput(): Promise<string> {
    return await this.senautemaInput.getAttribute('value');
  }

  async setSenautgrpsenInput(senautgrpsen: string): Promise<void> {
    await this.senautgrpsenInput.sendKeys(senautgrpsen);
  }

  async getSenautgrpsenInput(): Promise<string> {
    return await this.senautgrpsenInput.getAttribute('value');
  }

  async setSenautpagperInput(senautpagper: string): Promise<void> {
    await this.senautpagperInput.sendKeys(senautpagper);
  }

  async getSenautpagperInput(): Promise<string> {
    return await this.senautpagperInput.getAttribute('value');
  }

  async setSennbrqueInput(sennbrque: string): Promise<void> {
    await this.sennbrqueInput.sendKeys(sennbrque);
  }

  async getSennbrqueInput(): Promise<string> {
    return await this.sennbrqueInput.getAttribute('value');
  }

  async setSennomdisInput(sennomdis: string): Promise<void> {
    await this.sennomdisInput.sendKeys(sennomdis);
  }

  async getSennomdisInput(): Promise<string> {
    return await this.sennomdisInput.getAttribute('value');
  }

  async setNumsenInput(numsen: string): Promise<void> {
    await this.numsenInput.sendKeys(numsen);
  }

  async getNumsenInput(): Promise<string> {
    return await this.numsenInput.getAttribute('value');
  }

  async setSennumsieInput(sennumsie: string): Promise<void> {
    await this.sennumsieInput.sendKeys(sennumsie);
  }

  async getSennumsieInput(): Promise<string> {
    return await this.sennumsieInput.getAttribute('value');
  }

  async setSennbrvidInput(sennbrvid: string): Promise<void> {
    await this.sennbrvidInput.sendKeys(sennbrvid);
  }

  async getSennbrvidInput(): Promise<string> {
    return await this.sennbrvidInput.getAttribute('value');
  }

  async setSennomditInput(sennomdit: string): Promise<void> {
    await this.sennomditInput.sendKeys(sennomdit);
  }

  async getSennomditInput(): Promise<string> {
    return await this.sennomditInput.getAttribute('value');
  }

  async setTitnobcodInput(titnobcod: string): Promise<void> {
    await this.titnobcodInput.sendKeys(titnobcod);
  }

  async getTitnobcodInput(): Promise<string> {
    return await this.titnobcodInput.getAttribute('value');
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

export class SenDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-sen-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-sen'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
