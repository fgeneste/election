package fr.senat.election.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

import fr.senat.election.domain.enumeration.Sexe;

/**
 * A Candidat.
 */
@Entity
@Table(name = "candidat")
public class Candidat implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "libelle_departement")
    private String libelleDepartement;

    @Column(name = "numero_depot")
    private Long numeroDepot;

    @Column(name = "numero_depot_liste")
    private Long numeroDepotListe;

    @Column(name = "libelle_liste")
    private String libelleListe;

    @Column(name = "no_ordre_liste")
    private Long noOrdreListe;

    @Enumerated(EnumType.STRING)
    @Column(name = "sexe")
    private Sexe sexe;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "date_naissance")
    private LocalDate dateNaissance;

    @Column(name = "nuance")
    private String nuance;

    @Column(name = "profession")
    private String profession;

    @Column(name = "personnalite")
    private String personnalite;

    @Column(name = "sortant")
    private Boolean sortant;

    @Column(name = "sexe_supp")
    private String sexeSupp;

    @Column(name = "nom_supp")
    private String nomSupp;

    @Column(name = "prenom_supp")
    private String prenomSupp;

    @Column(name = "date_naissance_supp")
    private LocalDate dateNaissanceSupp;

    @Column(name = "is_elu")
    private Boolean isElu;

    @OneToOne
    @JoinColumn(unique = true)
    private Sen candidatreconnu;

    @OneToOne
    @JoinColumn(unique = true)
    private Sen suppleantreconnu;

    @OneToOne
    @JoinColumn(unique = true)
    private Elu elu;

    @OneToOne(mappedBy = "candidat")
    @JsonIgnore
    private Association association;

    @ManyToOne
    @JsonIgnoreProperties(value = "candidats", allowSetters = true)
    private Csp csp;

    @ManyToOne
    @JsonIgnoreProperties(value = "candidats", allowSetters = true)
    private Dpt dpt;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelleDepartement() {
        return libelleDepartement;
    }

    public Candidat libelleDepartement(String libelleDepartement) {
        this.libelleDepartement = libelleDepartement;
        return this;
    }

    public void setLibelleDepartement(String libelleDepartement) {
        this.libelleDepartement = libelleDepartement;
    }

    public Long getNumeroDepot() {
        return numeroDepot;
    }

    public Candidat numeroDepot(Long numeroDepot) {
        this.numeroDepot = numeroDepot;
        return this;
    }

    public void setNumeroDepot(Long numeroDepot) {
        this.numeroDepot = numeroDepot;
    }

    public Long getNumeroDepotListe() {
        return numeroDepotListe;
    }

    public Candidat numeroDepotListe(Long numeroDepotListe) {
        this.numeroDepotListe = numeroDepotListe;
        return this;
    }

    public void setNumeroDepotListe(Long numeroDepotListe) {
        this.numeroDepotListe = numeroDepotListe;
    }

    public String getLibelleListe() {
        return libelleListe;
    }

    public Candidat libelleListe(String libelleListe) {
        this.libelleListe = libelleListe;
        return this;
    }

    public void setLibelleListe(String libelleListe) {
        this.libelleListe = libelleListe;
    }

    public Long getNoOrdreListe() {
        return noOrdreListe;
    }

    public Candidat noOrdreListe(Long noOrdreListe) {
        this.noOrdreListe = noOrdreListe;
        return this;
    }

    public void setNoOrdreListe(Long noOrdreListe) {
        this.noOrdreListe = noOrdreListe;
    }

    public Sexe getSexe() {
        return sexe;
    }

    public Candidat sexe(Sexe sexe) {
        this.sexe = sexe;
        return this;
    }

    public void setSexe(Sexe sexe) {
        this.sexe = sexe;
    }

    public String getNom() {
        return nom;
    }

    public Candidat nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public Candidat prenom(String prenom) {
        this.prenom = prenom;
        return this;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public LocalDate getDateNaissance() {
        return dateNaissance;
    }

    public Candidat dateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
        return this;
    }

    public void setDateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getNuance() {
        return nuance;
    }

    public Candidat nuance(String nuance) {
        this.nuance = nuance;
        return this;
    }

    public void setNuance(String nuance) {
        this.nuance = nuance;
    }

    public String getProfession() {
        return profession;
    }

    public Candidat profession(String profession) {
        this.profession = profession;
        return this;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getPersonnalite() {
        return personnalite;
    }

    public Candidat personnalite(String personnalite) {
        this.personnalite = personnalite;
        return this;
    }

    public void setPersonnalite(String personnalite) {
        this.personnalite = personnalite;
    }

    public Boolean isSortant() {
        return sortant;
    }

    public Candidat sortant(Boolean sortant) {
        this.sortant = sortant;
        return this;
    }

    public void setSortant(Boolean sortant) {
        this.sortant = sortant;
    }

    public String getSexeSupp() {
        return sexeSupp;
    }

    public Candidat sexeSupp(String sexeSupp) {
        this.sexeSupp = sexeSupp;
        return this;
    }

    public void setSexeSupp(String sexeSupp) {
        this.sexeSupp = sexeSupp;
    }

    public String getNomSupp() {
        return nomSupp;
    }

    public Candidat nomSupp(String nomSupp) {
        this.nomSupp = nomSupp;
        return this;
    }

    public void setNomSupp(String nomSupp) {
        this.nomSupp = nomSupp;
    }

    public String getPrenomSupp() {
        return prenomSupp;
    }

    public Candidat prenomSupp(String prenomSupp) {
        this.prenomSupp = prenomSupp;
        return this;
    }

    public void setPrenomSupp(String prenomSupp) {
        this.prenomSupp = prenomSupp;
    }

    public LocalDate getDateNaissanceSupp() {
        return dateNaissanceSupp;
    }

    public Candidat dateNaissanceSupp(LocalDate dateNaissanceSupp) {
        this.dateNaissanceSupp = dateNaissanceSupp;
        return this;
    }

    public void setDateNaissanceSupp(LocalDate dateNaissanceSupp) {
        this.dateNaissanceSupp = dateNaissanceSupp;
    }

    public Boolean isIsElu() {
        return isElu;
    }

    public Candidat isElu(Boolean isElu) {
        this.isElu = isElu;
        return this;
    }

    public void setIsElu(Boolean isElu) {
        this.isElu = isElu;
    }

    public Sen getCandidatreconnu() {
        return candidatreconnu;
    }

    public Candidat candidatreconnu(Sen sen) {
        this.candidatreconnu = sen;
        return this;
    }

    public void setCandidatreconnu(Sen sen) {
        this.candidatreconnu = sen;
    }

    public Sen getSuppleantreconnu() {
        return suppleantreconnu;
    }

    public Candidat suppleantreconnu(Sen sen) {
        this.suppleantreconnu = sen;
        return this;
    }

    public void setSuppleantreconnu(Sen sen) {
        this.suppleantreconnu = sen;
    }

    public Elu getElu() {
        return elu;
    }

    public Candidat elu(Elu elu) {
        this.elu = elu;
        return this;
    }

    public void setElu(Elu elu) {
        this.elu = elu;
    }

    public Association getAssociation() {
        return association;
    }

    public Candidat association(Association association) {
        this.association = association;
        return this;
    }

    public void setAssociation(Association association) {
        this.association = association;
    }

    public Csp getCsp() {
        return csp;
    }

    public Candidat csp(Csp csp) {
        this.csp = csp;
        return this;
    }

    public void setCsp(Csp csp) {
        this.csp = csp;
    }

    public Dpt getDpt() {
        return dpt;
    }

    public Candidat dpt(Dpt dpt) {
        this.dpt = dpt;
        return this;
    }

    public void setDpt(Dpt dpt) {
        this.dpt = dpt;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Candidat)) {
            return false;
        }
        return id != null && id.equals(((Candidat) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Candidat{" +
            "id=" + getId() +
            ", libelleDepartement='" + getLibelleDepartement() + "'" +
            ", numeroDepot=" + getNumeroDepot() +
            ", numeroDepotListe=" + getNumeroDepotListe() +
            ", libelleListe='" + getLibelleListe() + "'" +
            ", noOrdreListe=" + getNoOrdreListe() +
            ", sexe='" + getSexe() + "'" +
            ", nom='" + getNom() + "'" +
            ", prenom='" + getPrenom() + "'" +
            ", dateNaissance='" + getDateNaissance() + "'" +
            ", nuance='" + getNuance() + "'" +
            ", profession='" + getProfession() + "'" +
            ", personnalite='" + getPersonnalite() + "'" +
            ", sortant='" + isSortant() + "'" +
            ", sexeSupp='" + getSexeSupp() + "'" +
            ", nomSupp='" + getNomSupp() + "'" +
            ", prenomSupp='" + getPrenomSupp() + "'" +
            ", dateNaissanceSupp='" + getDateNaissanceSupp() + "'" +
            ", isElu='" + isIsElu() + "'" +
            "}";
    }
}
