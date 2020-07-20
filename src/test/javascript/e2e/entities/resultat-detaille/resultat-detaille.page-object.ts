import { element, by, ElementFinder } from 'protractor';

export class ResultatDetailleComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-resultat-detaille div table .btn-danger'));
  title = element.all(by.css('jhi-resultat-detaille div h2#page-heading span')).first();
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

export class ResultatDetailleUpdatePage {
  pageTitle = element(by.id('jhi-resultat-detaille-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  noDepotInput = element(by.id('field_noDepot'));
  sexeSelect = element(by.id('field_sexe'));
  nomInput = element(by.id('field_nom'));
  prenomInput = element(by.id('field_prenom'));
  nuanceInput = element(by.id('field_nuance'));
  resultatCandidatInput = element(by.id('field_resultatCandidat'));
  nuanceListeInput = element(by.id('field_nuanceListe'));
  libelleListeInput = element(by.id('field_libelleListe'));
  teteListeInput = element(by.id('field_teteListe'));
  voixInput = element(by.id('field_voix'));
  voixOnInsInput = element(by.id('field_voixOnIns'));
  voixOnExpInput = element(by.id('field_voixOnExp'));
  siegesInput = element(by.id('field_sieges'));

  resultatSelect = element(by.id('field_resultat'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setNoDepotInput(noDepot: string): Promise<void> {
    await this.noDepotInput.sendKeys(noDepot);
  }

  async getNoDepotInput(): Promise<string> {
    return await this.noDepotInput.getAttribute('value');
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

  async setNuanceInput(nuance: string): Promise<void> {
    await this.nuanceInput.sendKeys(nuance);
  }

  async getNuanceInput(): Promise<string> {
    return await this.nuanceInput.getAttribute('value');
  }

  async setResultatCandidatInput(resultatCandidat: string): Promise<void> {
    await this.resultatCandidatInput.sendKeys(resultatCandidat);
  }

  async getResultatCandidatInput(): Promise<string> {
    return await this.resultatCandidatInput.getAttribute('value');
  }

  async setNuanceListeInput(nuanceListe: string): Promise<void> {
    await this.nuanceListeInput.sendKeys(nuanceListe);
  }

  async getNuanceListeInput(): Promise<string> {
    return await this.nuanceListeInput.getAttribute('value');
  }

  async setLibelleListeInput(libelleListe: string): Promise<void> {
    await this.libelleListeInput.sendKeys(libelleListe);
  }

  async getLibelleListeInput(): Promise<string> {
    return await this.libelleListeInput.getAttribute('value');
  }

  async setTeteListeInput(teteListe: string): Promise<void> {
    await this.teteListeInput.sendKeys(teteListe);
  }

  async getTeteListeInput(): Promise<string> {
    return await this.teteListeInput.getAttribute('value');
  }

  async setVoixInput(voix: string): Promise<void> {
    await this.voixInput.sendKeys(voix);
  }

  async getVoixInput(): Promise<string> {
    return await this.voixInput.getAttribute('value');
  }

  async setVoixOnInsInput(voixOnIns: string): Promise<void> {
    await this.voixOnInsInput.sendKeys(voixOnIns);
  }

  async getVoixOnInsInput(): Promise<string> {
    return await this.voixOnInsInput.getAttribute('value');
  }

  async setVoixOnExpInput(voixOnExp: string): Promise<void> {
    await this.voixOnExpInput.sendKeys(voixOnExp);
  }

  async getVoixOnExpInput(): Promise<string> {
    return await this.voixOnExpInput.getAttribute('value');
  }

  async setSiegesInput(sieges: string): Promise<void> {
    await this.siegesInput.sendKeys(sieges);
  }

  async getSiegesInput(): Promise<string> {
    return await this.siegesInput.getAttribute('value');
  }

  async resultatSelectLastOption(): Promise<void> {
    await this.resultatSelect.all(by.tagName('option')).last().click();
  }

  async resultatSelectOption(option: string): Promise<void> {
    await this.resultatSelect.sendKeys(option);
  }

  getResultatSelect(): ElementFinder {
    return this.resultatSelect;
  }

  async getResultatSelectedOption(): Promise<string> {
    return await this.resultatSelect.element(by.css('option:checked')).getText();
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

export class ResultatDetailleDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-resultatDetaille-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-resultatDetaille'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
