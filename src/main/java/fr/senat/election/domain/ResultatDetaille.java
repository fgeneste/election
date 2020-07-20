package fr.senat.election.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;

import fr.senat.election.domain.enumeration.Sexe;

/**
 * A ResultatDetaille.
 */
@Entity
@Table(name = "resultat_detaille")
public class ResultatDetaille implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "no_depot")
    private String noDepot;

    @Enumerated(EnumType.STRING)
    @Column(name = "sexe")
    private Sexe sexe;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "nuance")
    private String nuance;

    @Column(name = "resultat_candidat")
    private String resultatCandidat;

    @Column(name = "nuance_liste")
    private String nuanceListe;

    @Column(name = "libelle_liste")
    private String libelleListe;

    @Column(name = "tete_liste")
    private String teteListe;

    @Column(name = "voix")
    private Double voix;

    @Column(name = "voix_on_ins")
    private Double voixOnIns;

    @Column(name = "voix_on_exp")
    private Double voixOnExp;

    @Column(name = "sieges")
    private Integer sieges;

    @ManyToOne
    @JsonIgnoreProperties(value = "resultatDetailles", allowSetters = true)
    private Resultat resultat;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNoDepot() {
        return noDepot;
    }

    public ResultatDetaille noDepot(String noDepot) {
        this.noDepot = noDepot;
        return this;
    }

    public void setNoDepot(String noDepot) {
        this.noDepot = noDepot;
    }

    public Sexe getSexe() {
        return sexe;
    }

    public ResultatDetaille sexe(Sexe sexe) {
        this.sexe = sexe;
        return this;
    }

    public void setSexe(Sexe sexe) {
        this.sexe = sexe;
    }

    public String getNom() {
        return nom;
    }

    public ResultatDetaille nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public ResultatDetaille prenom(String prenom) {
        this.prenom = prenom;
        return this;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNuance() {
        return nuance;
    }

    public ResultatDetaille nuance(String nuance) {
        this.nuance = nuance;
        return this;
    }

    public void setNuance(String nuance) {
        this.nuance = nuance;
    }

    public String getResultatCandidat() {
        return resultatCandidat;
    }

    public ResultatDetaille resultatCandidat(String resultatCandidat) {
        this.resultatCandidat = resultatCandidat;
        return this;
    }

    public void setResultatCandidat(String resultatCandidat) {
        this.resultatCandidat = resultatCandidat;
    }

    public String getNuanceListe() {
        return nuanceListe;
    }

    public ResultatDetaille nuanceListe(String nuanceListe) {
        this.nuanceListe = nuanceListe;
        return this;
    }

    public void setNuanceListe(String nuanceListe) {
        this.nuanceListe = nuanceListe;
    }

    public String getLibelleListe() {
        return libelleListe;
    }

    public ResultatDetaille libelleListe(String libelleListe) {
        this.libelleListe = libelleListe;
        return this;
    }

    public void setLibelleListe(String libelleListe) {
        this.libelleListe = libelleListe;
    }

    public String getTeteListe() {
        return teteListe;
    }

    public ResultatDetaille teteListe(String teteListe) {
        this.teteListe = teteListe;
        return this;
    }

    public void setTeteListe(String teteListe) {
        this.teteListe = teteListe;
    }

    public Double getVoix() {
        return voix;
    }

    public ResultatDetaille voix(Double voix) {
        this.voix = voix;
        return this;
    }

    public void setVoix(Double voix) {
        this.voix = voix;
    }

    public Double getVoixOnIns() {
        return voixOnIns;
    }

    public ResultatDetaille voixOnIns(Double voixOnIns) {
        this.voixOnIns = voixOnIns;
        return this;
    }

    public void setVoixOnIns(Double voixOnIns) {
        this.voixOnIns = voixOnIns;
    }

    public Double getVoixOnExp() {
        return voixOnExp;
    }

    public ResultatDetaille voixOnExp(Double voixOnExp) {
        this.voixOnExp = voixOnExp;
        return this;
    }

    public void setVoixOnExp(Double voixOnExp) {
        this.voixOnExp = voixOnExp;
    }

    public Integer getSieges() {
        return sieges;
    }

    public ResultatDetaille sieges(Integer sieges) {
        this.sieges = sieges;
        return this;
    }

    public void setSieges(Integer sieges) {
        this.sieges = sieges;
    }

    public Resultat getResultat() {
        return resultat;
    }

    public ResultatDetaille resultat(Resultat resultat) {
        this.resultat = resultat;
        return this;
    }

    public void setResultat(Resultat resultat) {
        this.resultat = resultat;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ResultatDetaille)) {
            return false;
        }
        return id != null && id.equals(((ResultatDetaille) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ResultatDetaille{" +
            "id=" + getId() +
            ", noDepot='" + getNoDepot() + "'" +
            ", sexe='" + getSexe() + "'" +
            ", nom='" + getNom() + "'" +
            ", prenom='" + getPrenom() + "'" +
            ", nuance='" + getNuance() + "'" +
            ", resultatCandidat='" + getResultatCandidat() + "'" +
            ", nuanceListe='" + getNuanceListe() + "'" +
            ", libelleListe='" + getLibelleListe() + "'" +
            ", teteListe='" + getTeteListe() + "'" +
            ", voix=" + getVoix() +
            ", voixOnIns=" + getVoixOnIns() +
            ", voixOnExp=" + getVoixOnExp() +
            ", sieges=" + getSieges() +
            "}";
    }
}
