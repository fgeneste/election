package fr.senat.election.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A Dpt.
 */
@Entity
@Table(name = "dpt")
public class Dpt implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "dptnum")
    private String dptnum;

    @Column(name = "dptcod")
    private String dptcod;

    @Column(name = "dptlib")
    private String dptlib;

    @Column(name = "dptnbrsen")
    private Long dptnbrsen;

    @Column(name = "dptmodscrsen")
    private String dptmodscrsen;

    @Column(name = "dptser")
    private String dptser;

    @Column(name = "regcod")
    private String regcod;

    @Column(name = "dptnumtri")
    private Long dptnumtri;

    @Column(name = "dptcodsirpas")
    private String dptcodsirpas;

    @Column(name = "dptlic")
    private String dptlic;

    @Column(name = "dptart")
    private String dptart;

    @Column(name = "dptlibtri")
    private String dptlibtri;

    @Column(name = "temvalcod")
    private String temvalcod;

    @Column(name = "evelic")
    private String evelic;

    @Column(name = "evelib")
    private String evelib;

    @Column(name = "evelil")
    private String evelil;

    @Column(name = "eveobs")
    private String eveobs;

    @Column(name = "dptser_2004")
    private String dptser2004;

    @Column(name = "dptcmt")
    private String dptcmt;

    @Column(name = "dptcmtaff")
    private String dptcmtaff;

    @Column(name = "dptdatdeb")
    private LocalDate dptdatdeb;

    @Column(name = "dptdatfin")
    private LocalDate dptdatfin;

    @Column(name = "evetempub")
    private String evetempub;

    @Column(name = "dpturlcmp")
    private String dpturlcmp;

    @Column(name = "dptminintcod")
    private String dptminintcod;

    @Column(name = "syscredat")
    private LocalDate syscredat;

    @Column(name = "syscrelog")
    private String syscrelog;

    @Column(name = "sysmajdat")
    private LocalDate sysmajdat;

    @Column(name = "sysmajlog")
    private String sysmajlog;

    @OneToMany(mappedBy = "dpt")
    private Set<Candidat> candidats = new HashSet<>();

    @OneToMany(mappedBy = "dpt")
    private Set<Elu> elus = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDptnum() {
        return dptnum;
    }

    public Dpt dptnum(String dptnum) {
        this.dptnum = dptnum;
        return this;
    }

    public void setDptnum(String dptnum) {
        this.dptnum = dptnum;
    }

    public String getDptcod() {
        return dptcod;
    }

    public Dpt dptcod(String dptcod) {
        this.dptcod = dptcod;
        return this;
    }

    public void setDptcod(String dptcod) {
        this.dptcod = dptcod;
    }

    public String getDptlib() {
        return dptlib;
    }

    public Dpt dptlib(String dptlib) {
        this.dptlib = dptlib;
        return this;
    }

    public void setDptlib(String dptlib) {
        this.dptlib = dptlib;
    }

    public Long getDptnbrsen() {
        return dptnbrsen;
    }

    public Dpt dptnbrsen(Long dptnbrsen) {
        this.dptnbrsen = dptnbrsen;
        return this;
    }

    public void setDptnbrsen(Long dptnbrsen) {
        this.dptnbrsen = dptnbrsen;
    }

    public String getDptmodscrsen() {
        return dptmodscrsen;
    }

    public Dpt dptmodscrsen(String dptmodscrsen) {
        this.dptmodscrsen = dptmodscrsen;
        return this;
    }

    public void setDptmodscrsen(String dptmodscrsen) {
        this.dptmodscrsen = dptmodscrsen;
    }

    public String getDptser() {
        return dptser;
    }

    public Dpt dptser(String dptser) {
        this.dptser = dptser;
        return this;
    }

    public void setDptser(String dptser) {
        this.dptser = dptser;
    }

    public String getRegcod() {
        return regcod;
    }

    public Dpt regcod(String regcod) {
        this.regcod = regcod;
        return this;
    }

    public void setRegcod(String regcod) {
        this.regcod = regcod;
    }

    public Long getDptnumtri() {
        return dptnumtri;
    }

    public Dpt dptnumtri(Long dptnumtri) {
        this.dptnumtri = dptnumtri;
        return this;
    }

    public void setDptnumtri(Long dptnumtri) {
        this.dptnumtri = dptnumtri;
    }

    public String getDptcodsirpas() {
        return dptcodsirpas;
    }

    public Dpt dptcodsirpas(String dptcodsirpas) {
        this.dptcodsirpas = dptcodsirpas;
        return this;
    }

    public void setDptcodsirpas(String dptcodsirpas) {
        this.dptcodsirpas = dptcodsirpas;
    }

    public String getDptlic() {
        return dptlic;
    }

    public Dpt dptlic(String dptlic) {
        this.dptlic = dptlic;
        return this;
    }

    public void setDptlic(String dptlic) {
        this.dptlic = dptlic;
    }

    public String getDptart() {
        return dptart;
    }

    public Dpt dptart(String dptart) {
        this.dptart = dptart;
        return this;
    }

    public void setDptart(String dptart) {
        this.dptart = dptart;
    }

    public String getDptlibtri() {
        return dptlibtri;
    }

    public Dpt dptlibtri(String dptlibtri) {
        this.dptlibtri = dptlibtri;
        return this;
    }

    public void setDptlibtri(String dptlibtri) {
        this.dptlibtri = dptlibtri;
    }

    public String getTemvalcod() {
        return temvalcod;
    }

    public Dpt temvalcod(String temvalcod) {
        this.temvalcod = temvalcod;
        return this;
    }

    public void setTemvalcod(String temvalcod) {
        this.temvalcod = temvalcod;
    }

    public String getEvelic() {
        return evelic;
    }

    public Dpt evelic(String evelic) {
        this.evelic = evelic;
        return this;
    }

    public void setEvelic(String evelic) {
        this.evelic = evelic;
    }

    public String getEvelib() {
        return evelib;
    }

    public Dpt evelib(String evelib) {
        this.evelib = evelib;
        return this;
    }

    public void setEvelib(String evelib) {
        this.evelib = evelib;
    }

    public String getEvelil() {
        return evelil;
    }

    public Dpt evelil(String evelil) {
        this.evelil = evelil;
        return this;
    }

    public void setEvelil(String evelil) {
        this.evelil = evelil;
    }

    public String getEveobs() {
        return eveobs;
    }

    public Dpt eveobs(String eveobs) {
        this.eveobs = eveobs;
        return this;
    }

    public void setEveobs(String eveobs) {
        this.eveobs = eveobs;
    }

    public String getDptser2004() {
        return dptser2004;
    }

    public Dpt dptser2004(String dptser2004) {
        this.dptser2004 = dptser2004;
        return this;
    }

    public void setDptser2004(String dptser2004) {
        this.dptser2004 = dptser2004;
    }

    public String getDptcmt() {
        return dptcmt;
    }

    public Dpt dptcmt(String dptcmt) {
        this.dptcmt = dptcmt;
        return this;
    }

    public void setDptcmt(String dptcmt) {
        this.dptcmt = dptcmt;
    }

    public String getDptcmtaff() {
        return dptcmtaff;
    }

    public Dpt dptcmtaff(String dptcmtaff) {
        this.dptcmtaff = dptcmtaff;
        return this;
    }

    public void setDptcmtaff(String dptcmtaff) {
        this.dptcmtaff = dptcmtaff;
    }

    public LocalDate getDptdatdeb() {
        return dptdatdeb;
    }

    public Dpt dptdatdeb(LocalDate dptdatdeb) {
        this.dptdatdeb = dptdatdeb;
        return this;
    }

    public void setDptdatdeb(LocalDate dptdatdeb) {
        this.dptdatdeb = dptdatdeb;
    }

    public LocalDate getDptdatfin() {
        return dptdatfin;
    }

    public Dpt dptdatfin(LocalDate dptdatfin) {
        this.dptdatfin = dptdatfin;
        return this;
    }

    public void setDptdatfin(LocalDate dptdatfin) {
        this.dptdatfin = dptdatfin;
    }

    public String getEvetempub() {
        return evetempub;
    }

    public Dpt evetempub(String evetempub) {
        this.evetempub = evetempub;
        return this;
    }

    public void setEvetempub(String evetempub) {
        this.evetempub = evetempub;
    }

    public String getDpturlcmp() {
        return dpturlcmp;
    }

    public Dpt dpturlcmp(String dpturlcmp) {
        this.dpturlcmp = dpturlcmp;
        return this;
    }

    public void setDpturlcmp(String dpturlcmp) {
        this.dpturlcmp = dpturlcmp;
    }

    public String getDptminintcod() {
        return dptminintcod;
    }

    public Dpt dptminintcod(String dptminintcod) {
        this.dptminintcod = dptminintcod;
        return this;
    }

    public void setDptminintcod(String dptminintcod) {
        this.dptminintcod = dptminintcod;
    }

    public LocalDate getSyscredat() {
        return syscredat;
    }

    public Dpt syscredat(LocalDate syscredat) {
        this.syscredat = syscredat;
        return this;
    }

    public void setSyscredat(LocalDate syscredat) {
        this.syscredat = syscredat;
    }

    public String getSyscrelog() {
        return syscrelog;
    }

    public Dpt syscrelog(String syscrelog) {
        this.syscrelog = syscrelog;
        return this;
    }

    public void setSyscrelog(String syscrelog) {
        this.syscrelog = syscrelog;
    }

    public LocalDate getSysmajdat() {
        return sysmajdat;
    }

    public Dpt sysmajdat(LocalDate sysmajdat) {
        this.sysmajdat = sysmajdat;
        return this;
    }

    public void setSysmajdat(LocalDate sysmajdat) {
        this.sysmajdat = sysmajdat;
    }

    public String getSysmajlog() {
        return sysmajlog;
    }

    public Dpt sysmajlog(String sysmajlog) {
        this.sysmajlog = sysmajlog;
        return this;
    }

    public void setSysmajlog(String sysmajlog) {
        this.sysmajlog = sysmajlog;
    }

    public Set<Candidat> getCandidats() {
        return candidats;
    }

    public Dpt candidats(Set<Candidat> candidats) {
        this.candidats = candidats;
        return this;
    }

    public Dpt addCandidat(Candidat candidat) {
        this.candidats.add(candidat);
        candidat.setDpt(this);
        return this;
    }

    public Dpt removeCandidat(Candidat candidat) {
        this.candidats.remove(candidat);
        candidat.setDpt(null);
        return this;
    }

    public void setCandidats(Set<Candidat> candidats) {
        this.candidats = candidats;
    }

    public Set<Elu> getElus() {
        return elus;
    }

    public Dpt elus(Set<Elu> elus) {
        this.elus = elus;
        return this;
    }

    public Dpt addElu(Elu elu) {
        this.elus.add(elu);
        elu.setDpt(this);
        return this;
    }

    public Dpt removeElu(Elu elu) {
        this.elus.remove(elu);
        elu.setDpt(null);
        return this;
    }

    public void setElus(Set<Elu> elus) {
        this.elus = elus;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Dpt)) {
            return false;
        }
        return id != null && id.equals(((Dpt) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Dpt{" +
            "id=" + getId() +
            ", dptnum='" + getDptnum() + "'" +
            ", dptcod='" + getDptcod() + "'" +
            ", dptlib='" + getDptlib() + "'" +
            ", dptnbrsen=" + getDptnbrsen() +
            ", dptmodscrsen='" + getDptmodscrsen() + "'" +
            ", dptser='" + getDptser() + "'" +
            ", regcod='" + getRegcod() + "'" +
            ", dptnumtri=" + getDptnumtri() +
            ", dptcodsirpas='" + getDptcodsirpas() + "'" +
            ", dptlic='" + getDptlic() + "'" +
            ", dptart='" + getDptart() + "'" +
            ", dptlibtri='" + getDptlibtri() + "'" +
            ", temvalcod='" + getTemvalcod() + "'" +
            ", evelic='" + getEvelic() + "'" +
            ", evelib='" + getEvelib() + "'" +
            ", evelil='" + getEvelil() + "'" +
            ", eveobs='" + getEveobs() + "'" +
            ", dptser2004='" + getDptser2004() + "'" +
            ", dptcmt='" + getDptcmt() + "'" +
            ", dptcmtaff='" + getDptcmtaff() + "'" +
            ", dptdatdeb='" + getDptdatdeb() + "'" +
            ", dptdatfin='" + getDptdatfin() + "'" +
            ", evetempub='" + getEvetempub() + "'" +
            ", dpturlcmp='" + getDpturlcmp() + "'" +
            ", dptminintcod='" + getDptminintcod() + "'" +
            ", syscredat='" + getSyscredat() + "'" +
            ", syscrelog='" + getSyscrelog() + "'" +
            ", sysmajdat='" + getSysmajdat() + "'" +
            ", sysmajlog='" + getSysmajlog() + "'" +
            "}";
    }
}
