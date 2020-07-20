import { element, by, ElementFinder } from 'protractor';

export class EluComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-elu div table .btn-danger'));
  title = element.all(by.css('jhi-elu div h2#page-heading span')).first();
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

export class EluUpdatePage {
  pageTitle = element(by.id('jhi-elu-heading'));
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
  tourElectionInput = element(by.id('field_tourElection'));

  elusenSelect = element(by.id('field_elusen'));
  suppleantsenSelect = element(by.id('field_suppleantsen'));
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

  async setTourElectionInput(tourElection: string): Promise<void> {
    await this.tourElectionInput.sendKeys(tourElection);
  }

  async getTourElectionInput(): Promise<string> {
    return await this.tourElectionInput.getAttribute('value');
  }

  async elusenSelectLastOption(): Promise<void> {
    await this.elusenSelect.all(by.tagName('option')).last().click();
  }

  async elusenSelectOption(option: string): Promise<void> {
    await this.elusenSelect.sendKeys(option);
  }

  getElusenSelect(): ElementFinder {
    return this.elusenSelect;
  }

  async getElusenSelectedOption(): Promise<string> {
    return await this.elusenSelect.element(by.css('option:checked')).getText();
  }

  async suppleantsenSelectLastOption(): Promise<void> {
    await this.suppleantsenSelect.all(by.tagName('option')).last().click();
  }

  async suppleantsenSelectOption(option: string): Promise<void> {
    await this.suppleantsenSelect.sendKeys(option);
  }

  getSuppleantsenSelect(): ElementFinder {
    return this.suppleantsenSelect;
  }

  async getSuppleantsenSelectedOption(): Promise<string> {
    return await this.suppleantsenSelect.element(by.css('option:checked')).getText();
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

export class EluDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-elu-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-elu'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
