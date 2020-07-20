package fr.senat.election.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

import fr.senat.election.domain.enumeration.Sexe;

/**
 * A Elu.
 */
@Entity
@Table(name = "elu")
public class Elu implements Serializable {

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

    @Column(name = "tour_election")
    private String tourElection;

    @OneToOne
    @JoinColumn(unique = true)
    private Sen elusen;

    @OneToOne
    @JoinColumn(unique = true)
    private Sen suppleantsen;

    @OneToOne(mappedBy = "elu")
    @JsonIgnore
    private Candidat candidat;

    @ManyToOne
    @JsonIgnoreProperties(value = "elus", allowSetters = true)
    private Csp csp;

    @ManyToOne
    @JsonIgnoreProperties(value = "elus", allowSetters = true)
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

    public Elu libelleDepartement(String libelleDepartement) {
        this.libelleDepartement = libelleDepartement;
        return this;
    }

    public void setLibelleDepartement(String libelleDepartement) {
        this.libelleDepartement = libelleDepartement;
    }

    public Long getNumeroDepot() {
        return numeroDepot;
    }

    public Elu numeroDepot(Long numeroDepot) {
        this.numeroDepot = numeroDepot;
        return this;
    }

    public void setNumeroDepot(Long numeroDepot) {
        this.numeroDepot = numeroDepot;
    }

    public Long getNumeroDepotListe() {
        return numeroDepotListe;
    }

    public Elu numeroDepotListe(Long numeroDepotListe) {
        this.numeroDepotListe = numeroDepotListe;
        return this;
    }

    public void setNumeroDepotListe(Long numeroDepotListe) {
        this.numeroDepotListe = numeroDepotListe;
    }

    public String getLibelleListe() {
        return libelleListe;
    }

    public Elu libelleListe(String libelleListe) {
        this.libelleListe = libelleListe;
        return this;
    }

    public void setLibelleListe(String libelleListe) {
        this.libelleListe = libelleListe;
    }

    public Long getNoOrdreListe() {
        return noOrdreListe;
    }

    public Elu noOrdreListe(Long noOrdreListe) {
        this.noOrdreListe = noOrdreListe;
        return this;
    }

    public void setNoOrdreListe(Long noOrdreListe) {
        this.noOrdreListe = noOrdreListe;
    }

    public Sexe getSexe() {
        return sexe;
    }

    public Elu sexe(Sexe sexe) {
        this.sexe = sexe;
        return this;
    }

    public void setSexe(Sexe sexe) {
        this.sexe = sexe;
    }

    public String getNom() {
        return nom;
    }

    public Elu nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public Elu prenom(String prenom) {
        this.prenom = prenom;
        return this;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public LocalDate getDateNaissance() {
        return dateNaissance;
    }

    public Elu dateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
        return this;
    }

    public void setDateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getNuance() {
        return nuance;
    }

    public Elu nuance(String nuance) {
        this.nuance = nuance;
        return this;
    }

    public void setNuance(String nuance) {
        this.nuance = nuance;
    }

    public String getProfession() {
        return profession;
    }

    public Elu profession(String profession) {
        this.profession = profession;
        return this;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getPersonnalite() {
        return personnalite;
    }

    public Elu personnalite(String personnalite) {
        this.personnalite = personnalite;
        return this;
    }

    public void setPersonnalite(String personnalite) {
        this.personnalite = personnalite;
    }

    public Boolean isSortant() {
        return sortant;
    }

    public Elu sortant(Boolean sortant) {
        this.sortant = sortant;
        return this;
    }

    public void setSortant(Boolean sortant) {
        this.sortant = sortant;
    }

    public String getSexeSupp() {
        return sexeSupp;
    }

    public Elu sexeSupp(String sexeSupp) {
        this.sexeSupp = sexeSupp;
        return this;
    }

    public void setSexeSupp(String sexeSupp) {
        this.sexeSupp = sexeSupp;
    }

    public String getNomSupp() {
        return nomSupp;
    }

    public Elu nomSupp(String nomSupp) {
        this.nomSupp = nomSupp;
        return this;
    }

    public void setNomSupp(String nomSupp) {
        this.nomSupp = nomSupp;
    }

    public String getPrenomSupp() {
        return prenomSupp;
    }

    public Elu prenomSupp(String prenomSupp) {
        this.prenomSupp = prenomSupp;
        return this;
    }

    public void setPrenomSupp(String prenomSupp) {
        this.prenomSupp = prenomSupp;
    }

    public LocalDate getDateNaissanceSupp() {
        return dateNaissanceSupp;
    }

    public Elu dateNaissanceSupp(LocalDate dateNaissanceSupp) {
        this.dateNaissanceSupp = dateNaissanceSupp;
        return this;
    }

    public void setDateNaissanceSupp(LocalDate dateNaissanceSupp) {
        this.dateNaissanceSupp = dateNaissanceSupp;
    }

    public String getTourElection() {
        return tourElection;
    }

    public Elu tourElection(String tourElection) {
        this.tourElection = tourElection;
        return this;
    }

    public void setTourElection(String tourElection) {
        this.tourElection = tourElection;
    }

    public Sen getElusen() {
        return elusen;
    }

    public Elu elusen(Sen sen) {
        this.elusen = sen;
        return this;
    }

    public void setElusen(Sen sen) {
        this.elusen = sen;
    }

    public Sen getSuppleantsen() {
        return suppleantsen;
    }

    public Elu suppleantsen(Sen sen) {
        this.suppleantsen = sen;
        return this;
    }

    public void setSuppleantsen(Sen sen) {
        this.suppleantsen = sen;
    }

    public Candidat getCandidat() {
        return candidat;
    }

    public Elu candidat(Candidat candidat) {
        this.candidat = candidat;
        return this;
    }

    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }

    public Csp getCsp() {
        return csp;
    }

    public Elu csp(Csp csp) {
        this.csp = csp;
        return this;
    }

    public void setCsp(Csp csp) {
        this.csp = csp;
    }

    public Dpt getDpt() {
        return dpt;
    }

    public Elu dpt(Dpt dpt) {
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
        if (!(o instanceof Elu)) {
            return false;
        }
        return id != null && id.equals(((Elu) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Elu{" +
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
            ", tourElection='" + getTourElection() + "'" +
            "}";
    }
}
