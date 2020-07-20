import { element, by, ElementFinder } from 'protractor';

export class CandidatComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-candidat div table .btn-danger'));
  title = element.all(by.css('jhi-candidat div h2#page-heading span')).first();
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

export class CandidatUpdatePage {
  pageTitle = element(by.id('jhi-candidat-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  libelleDepartementInput = element(by.id('field_libelleDepartement'));
  numeroDepotInput = element(by.id('field_numeroDepot'));
  numeroDepotListeInput = element(by.id('field_numeroDepotListe'));
  libelleListeInput = element(by.id('field_libelleListe'));
  noOrdreListeInput = element(by.id('field_noOrdreListe'));
  sexeSelect = element(by.id('field_sexe'));
  nomInput = element(by.id('field_nom'));
  prenomInput = element(by.id('field_prenom'));
  dateNaissanceInput = element(by.id('field_dateNaissance'));
  nuanceInput = element(by.id('field_nuance'));
  professionInput = element(by.id('field_profession'));
  personnaliteInput = element(by.id('field_personnalite'));
  sortantInput = element(by.id('field_sortant'));
  sexeSuppInput = element(by.id('field_sexeSupp'));
  nomSuppInput = element(by.id('field_nomSupp'));
  prenomSuppInput = element(by.id('field_prenomSupp'));
  dateNaissanceSuppInput = element(by.id('field_dateNaissanceSupp'));
  isEluInput = element(by.id('field_isElu'));

  candidatreconnuSelect = element(by.id('field_candidatreconnu'));
  suppleantreconnuSelect = element(by.id('field_suppleantreconnu'));
  eluSelect = element(by.id('field_elu'));
  cspSelect = element(by.id('field_csp'));
  dptSelect = element(by.id('field_dpt'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setLibelleDepartementInput(libelleDepartement: string): Promise<void> {
    await this.libelleDepartementInput.sendKeys(libelleDepartement);
  }

  async getLibelleDepartementInput(): Promise<string> {
    return await this.libelleDepartementInput.getAttribute('value');
  }

  async setNumeroDepotInput(numeroDepot: string): Promise<void> {
    await this.numeroDepotInput.sendKeys(numeroDepot);
  }

  async getNumeroDepotInput(): Promise<string> {
    return await this.numeroDepotInput.getAttribute('value');
  }

  async setNumeroDepotListeInput(numeroDepotListe: string): Promise<void> {
    await this.numeroDepotListeInput.sendKeys(numeroDepotListe);
  }

  async getNumeroDepotListeInput(): Promise<string> {
    return await this.numeroDepotListeInput.getAttribute('value');
  }

  async setLibelleListeInput(libelleListe: string): Promise<void> {
    await this.libelleListeInput.sendKeys(libelleListe);
  }

  async getLibelleListeInput(): Promise<string> {
    return await this.libelleListeInput.getAttribute('value');
  }

  async setNoOrdreListeInput(noOrdreListe: string): Promise<void> {
    await this.noOrdreListeInput.sendKeys(noOrdreListe);
  }

  async getNoOrdreListeInput(): Promise<string> {
    return await this.noOrdreListeInput.getAttribute('value');
  }

  async setSexeSelect(sexe: string): Promise<void> {
    await this.sexeSelect.sendKeys(sexe);
  }

  async getSexeSelect(): Promise<string> {
    return await this.sexeSelect.element(by.css('option:checked')).getText();
  }

  async sexeSelectLastOption(): Promise<void> {
    await this.sexeSelect.all(by.tagName('option')).last().click();
  }

  async setNomInput(nom: string): Promise<void> {
    await this.nomInput.sendKeys(nom);
  }

  async getNomInput(): Promise<string> {
    return await this.nomInput.getAttribute('value');
  }

  async setPrenomInput(prenom: string): Promise<void> {
    await this.prenomInput.sendKeys(prenom);
  }

  async getPrenomInput(): Promise<string> {
    return await this.prenomInput.getAttribute('value');
  }

  async setDateNaissanceInput(dateNaissance: string): Promise<void> {
    await this.dateNaissanceInput.sendKeys(dateNaissance);
  }

  async getDateNaissanceInput(): Promise<string> {
    return await this.dateNaissanceInput.getAttribute('value');
  }

  async setNuanceInput(nuance: string): Promise<void> {
    await this.nuanceInput.sendKeys(nuance);
  }

  async getNuanceInput(): Promise<string> {
    return await this.nuanceInput.getAttribute('value');
  }

  async setProfessionInput(profession: string): Promise<void> {
    await this.professionInput.sendKeys(profession);
  }

  async getProfessionInput(): Promise<string> {
    return await this.professionInput.getAttribute('value');
  }

  async setPersonnaliteInput(personnalite: string): Promise<void> {
    await this.personnaliteInput.sendKeys(personnalite);
  }

  async getPersonnaliteInput(): Promise<string> {
    return await this.personnaliteInput.getAttribute('value');
  }

  getSortantInput(): ElementFinder {
    return this.sortantInput;
  }

  async setSexeSuppInput(sexeSupp: string): Promise<void> {
    await this.sexeSuppInput.sendKeys(sexeSupp);
  }

  async getSexeSuppInput(): Promise<string> {
    return await this.sexeSuppInput.getAttribute('value');
  }

  async setNomSuppInput(nomSupp: string): Promise<void> {
    await this.nomSuppInput.sendKeys(nomSupp);
  }

  async getNomSuppInput(): Promise<string> {
    return await this.nomSuppInput.getAttribute('value');
  }

  async setPrenomSuppInput(prenomSupp: string): Promise<void> {
    await this.prenomSuppInput.sendKeys(prenomSupp);
  }

  async getPrenomSuppInput(): Promise<string> {
    return await this.prenomSuppInput.getAttribute('value');
  }

  async setDateNaissanceSuppInput(dateNaissanceSupp: string): Promise<void> {
    await this.dateNaissanceSuppInput.sendKeys(dateNaissanceSupp);
  }

  async getDateNaissanceSuppInput(): Promise<string> {
    return await this.dateNaissanceSuppInput.getAttribute('value');
  }

  getIsEluInput(): ElementFinder {
    return this.isEluInput;
  }

  async candidatreconnuSelectLastOption(): Promise<void> {
    await this.candidatreconnuSelect.all(by.tagName('option')).last().click();
  }

  async candidatreconnuSelectOption(option: string): Promise<void> {
    await this.candidatreconnuSelect.sendKeys(option);
  }

  getCandidatreconnuSelect(): ElementFinder {
    return this.candidatreconnuSelect;
  }

  async getCandidatreconnuSelectedOption(): Promise<string> {
    return await this.candidatreconnuSelect.element(by.css('option:checked')).getText();
  }

  async suppleantreconnuSelectLastOption(): Promise<void> {
    await this.suppleantreconnuSelect.all(by.tagName('option')).last().click();
  }

  async suppleantreconnuSelectOption(option: string): Promise<void> {
    await this.suppleantreconnuSelect.sendKeys(option);
  }

  getSuppleantreconnuSelect(): ElementFinder {
    return this.suppleantreconnuSelect;
  }

  async getSuppleantreconnuSelectedOption(): Promise<string> {
    return await this.suppleantreconnuSelect.element(by.css('option:checked')).getText();
  }

  async eluSelectLastOption(): Promise<void> {
    await this.eluSelect.all(by.tagName('option')).last().click();
  }

  async eluSelectOption(option: string): Promise<void> {
    await this.eluSelect.sendKeys(option);
  }

  getEluSelect(): ElementFinder {
    return this.eluSelect;
  }

  async getEluSelectedOption(): Promise<string> {
    return await this.eluSelect.element(by.css('option:checked')).getText();
  }

  async cspSelectLastOption(): Promise<void> {
    await this.cspSelect.all(by.tagName('option')).last().click();
  }

  async cspSelectOption(option: string): Promise<void> {
    await this.cspSelect.sendKeys(option);
  }

  getCspSelect(): ElementFinder {
    return this.cspSelect;
  }

  async getCspSelectedOption(): Promise<string> {
    return await this.cspSelect.element(by.css('option:checked')).getText();
  }

  async dptSelectLastOption(): Promise<void> {
    await this.dptSelect.all(by.tagName('option')).last().click();
  }

  async dptSelectOption(option: string): Promise<void> {
    await this.dptSelect.sendKeys(option);
  }

  getDptSelect(): ElementFinder {
    return this.dptSelect;
  }

  async getDptSelectedOption(): Promise<string> {
    return await this.dptSelect.element(by.css('option:checked')).getText();
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

export class CandidatDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-candidat-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-candidat'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
