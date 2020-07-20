package fr.senat.election.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A Resultat.
 */
@Entity
@Table(name = "resultat")
public class Resultat implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "date_export")
    private LocalDate dateExport;

    @Column(name = "numero_departement")
    private String numeroDepartement;

    @Column(name = "libelle_departement")
    private String libelleDepartement;

    @Column(name = "no_tour")
    private String noTour;

    @Column(name = "inscrits")
    private Double inscrits;

    @Column(name = "abstentions")
    private Double abstentions;

    @Column(name = "abs_on_ins")
    private Double absOnIns;

    @Column(name = "votants")
    private Double votants;

    @Column(name = "vot_on_ins")
    private Double votOnIns;

    @Column(name = "blancs")
    private Double blancs;

    @Column(name = "blancs_on_ins")
    private Double blancsOnIns;

    @Column(name = "blancs_on_vot")
    private Double blancsOnVot;

    @Column(name = "nuls")
    private Double nuls;

    @Column(name = "nuls_on_ins")
    private Double nulsOnIns;

    @Column(name = "nuls_on_vot")
    private Double nulsOnVot;

    @Column(name = "exprime")
    private Double exprime;

    @Column(name = "exp_on_ins")
    private Double expOnIns;

    @Column(name = "exp_on_vot")
    private Double expOnVot;

    @OneToMany(mappedBy = "resultat")
    private Set<ResultatDetaille> resultatDetailles = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateExport() {
        return dateExport;
    }

    public Resultat dateExport(LocalDate dateExport) {
        this.dateExport = dateExport;
        return this;
    }

    public void setDateExport(LocalDate dateExport) {
        this.dateExport = dateExport;
    }

    public String getNumeroDepartement() {
        return numeroDepartement;
    }

    public Resultat numeroDepartement(String numeroDepartement) {
        this.numeroDepartement = numeroDepartement;
        return this;
    }

    public void setNumeroDepartement(String numeroDepartement) {
        this.numeroDepartement = numeroDepartement;
    }

    public String getLibelleDepartement() {
        return libelleDepartement;
    }

    public Resultat libelleDepartement(String libelleDepartement) {
        this.libelleDepartement = libelleDepartement;
        return this;
    }

    public void setLibelleDepartement(String libelleDepartement) {
        this.libelleDepartement = libelleDepartement;
    }

    public String getNoTour() {
        return noTour;
    }

    public Resultat noTour(String noTour) {
        this.noTour = noTour;
        return this;
    }

    public void setNoTour(String noTour) {
        this.noTour = noTour;
    }

    public Double getInscrits() {
        return inscrits;
    }

    public Resultat inscrits(Double inscrits) {
        this.inscrits = inscrits;
        return this;
    }

    public void setInscrits(Double inscrits) {
        this.inscrits = inscrits;
    }

    public Double getAbstentions() {
        return abstentions;
    }

    public Resultat abstentions(Double abstentions) {
        this.abstentions = abstentions;
        return this;
    }

    public void setAbstentions(Double abstentions) {
        this.abstentions = abstentions;
    }

    public Double getAbsOnIns() {
        return absOnIns;
    }

    public Resultat absOnIns(Double absOnIns) {
        this.absOnIns = absOnIns;
        return this;
    }

    public void setAbsOnIns(Double absOnIns) {
        this.absOnIns = absOnIns;
    }

    public Double getVotants() {
        return votants;
    }

    public Resultat votants(Double votants) {
        this.votants = votants;
        return this;
    }

    public void setVotants(Double votants) {
        this.votants = votants;
    }

    public Double getVotOnIns() {
        return votOnIns;
    }

    public Resultat votOnIns(Double votOnIns) {
        this.votOnIns = votOnIns;
        return this;
    }

    public void setVotOnIns(Double votOnIns) {
        this.votOnIns = votOnIns;
    }

    public Double getBlancs() {
        return blancs;
    }

    public Resultat blancs(Double blancs) {
        this.blancs = blancs;
        return this;
    }

    public void setBlancs(Double blancs) {
        this.blancs = blancs;
    }

    public Double getBlancsOnIns() {
        return blancsOnIns;
    }

    public Resultat blancsOnIns(Double blancsOnIns) {
        this.blancsOnIns = blancsOnIns;
        return this;
    }

    public void setBlancsOnIns(Double blancsOnIns) {
        this.blancsOnIns = blancsOnIns;
    }

    public Double getBlancsOnVot() {
        return blancsOnVot;
    }

    public Resultat blancsOnVot(Double blancsOnVot) {
        this.blancsOnVot = blancsOnVot;
        return this;
    }

    public void setBlancsOnVot(Double blancsOnVot) {
        this.blancsOnVot = blancsOnVot;
    }

    public Double getNuls() {
        return nuls;
    }

    public Resultat nuls(Double nuls) {
        this.nuls = nuls;
        return this;
    }

    public void setNuls(Double nuls) {
        this.nuls = nuls;
    }

    public Double getNulsOnIns() {
        return nulsOnIns;
    }

    public Resultat nulsOnIns(Double nulsOnIns) {
        this.nulsOnIns = nulsOnIns;
        return this;
    }

    public void setNulsOnIns(Double nulsOnIns) {
        this.nulsOnIns = nulsOnIns;
    }

    public Double getNulsOnVot() {
        return nulsOnVot;
    }

    public Resultat nulsOnVot(Double nulsOnVot) {
        this.nulsOnVot = nulsOnVot;
        return this;
    }

    public void setNulsOnVot(Double nulsOnVot) {
        this.nulsOnVot = nulsOnVot;
    }

    public Double getExprime() {
        return exprime;
    }

    public Resultat exprime(Double exprime) {
        this.exprime = exprime;
        return this;
    }

    public void setExprime(Double exprime) {
        this.exprime = exprime;
    }

    public Double getExpOnIns() {
        return expOnIns;
    }

    public Resultat expOnIns(Double expOnIns) {
        this.expOnIns = expOnIns;
        return this;
    }

    public void setExpOnIns(Double expOnIns) {
        this.expOnIns = expOnIns;
    }

    public Double getExpOnVot() {
        return expOnVot;
    }

    public Resultat expOnVot(Double expOnVot) {
        this.expOnVot = expOnVot;
        return this;
    }

    public void setExpOnVot(Double expOnVot) {
        this.expOnVot = expOnVot;
    }

    public Set<ResultatDetaille> getResultatDetailles() {
        return resultatDetailles;
    }

    public Resultat resultatDetailles(Set<ResultatDetaille> resultatDetailles) {
        this.resultatDetailles = resultatDetailles;
        return this;
    }

    public Resultat addResultatDetaille(ResultatDetaille resultatDetaille) {
        this.resultatDetailles.add(resultatDetaille);
        resultatDetaille.setResultat(this);
        return this;
    }

    public Resultat removeResultatDetaille(ResultatDetaille resultatDetaille) {
        this.resultatDetailles.remove(resultatDetaille);
        resultatDetaille.setResultat(null);
        return this;
    }

    public void setResultatDetailles(Set<ResultatDetaille> resultatDetailles) {
        this.resultatDetailles = resultatDetailles;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Resultat)) {
            return false;
        }
        return id != null && id.equals(((Resultat) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Resultat{" +
            "id=" + getId() +
            ", dateExport='" + getDateExport() + "'" +
            ", numeroDepartement='" + getNumeroDepartement() + "'" +
            ", libelleDepartement='" + getLibelleDepartement() + "'" +
            ", noTour='" + getNoTour() + "'" +
            ", inscrits=" + getInscrits() +
            ", abstentions=" + getAbstentions() +
            ", absOnIns=" + getAbsOnIns() +
            ", votants=" + getVotants() +
            ", votOnIns=" + getVotOnIns() +
            ", blancs=" + getBlancs() +
            ", blancsOnIns=" + getBlancsOnIns() +
            ", blancsOnVot=" + getBlancsOnVot() +
            ", nuls=" + getNuls() +
            ", nulsOnIns=" + getNulsOnIns() +
            ", nulsOnVot=" + getNulsOnVot() +
            ", exprime=" + getExprime() +
            ", expOnIns=" + getExpOnIns() +
            ", expOnVot=" + getExpOnVot() +
            "}";
    }
}
