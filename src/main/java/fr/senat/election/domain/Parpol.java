package fr.senat.election.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Parpol.
 */
@Entity
@Table(name = "parpol")
public class Parpol implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "tenpolcod")
    private String tenpolcod;

    @Column(name = "orgcod")
    private String orgcod;

    @Column(name = "typparpolcod")
    private String typparpolcod;

    @Column(name = "typorgcod")
    private String typorgcod;

    @Column(name = "eveobs")
    private String eveobs;

    @Column(name = "orgart")
    private String orgart;

    @Column(name = "orgnumtri")
    private Integer orgnumtri;

    @Column(name = "orgdatfin")
    private LocalDate orgdatfin;

    @Column(name = "orgnumtie")
    private String orgnumtie;

    @Column(name = "orgurlsim")
    private String orgurlsim;

    @Column(name = "orgurlcmp")
    private String orgurlcmp;

    @Column(name = "orgtemannu")
    private String orgtemannu;

    @Column(name = "evetempub")
    private String evetempub;

    @Column(name = "syscredat")
    private LocalDate syscredat;

    @Column(name = "syscrelog")
    private String syscrelog;

    @Column(name = "sysmajdat")
    private LocalDate sysmajdat;

    @Column(name = "sysmajlog")
    private String sysmajlog;

    @Column(name = "evelil")
    private String evelil;

    @Column(name = "evelib")
    private String evelib;

    @Column(name = "evelic")
    private String evelic;

    @Column(name = "temvalcod")
    private String temvalcod;

    @Column(name = "orgdatcre")
    private LocalDate orgdatcre;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTenpolcod() {
        return tenpolcod;
    }

    public Parpol tenpolcod(String tenpolcod) {
        this.tenpolcod = tenpolcod;
        return this;
    }

    public void setTenpolcod(String tenpolcod) {
        this.tenpolcod = tenpolcod;
    }

    public String getOrgcod() {
        return orgcod;
    }

    public Parpol orgcod(String orgcod) {
        this.orgcod = orgcod;
        return this;
    }

    public void setOrgcod(String orgcod) {
        this.orgcod = orgcod;
    }

    public String getTypparpolcod() {
        return typparpolcod;
    }

    public Parpol typparpolcod(String typparpolcod) {
        this.typparpolcod = typparpolcod;
        return this;
    }

    public void setTypparpolcod(String typparpolcod) {
        this.typparpolcod = typparpolcod;
    }

    public String getTyporgcod() {
        return typorgcod;
    }

    public Parpol typorgcod(String typorgcod) {
        this.typorgcod = typorgcod;
        return this;
    }

    public void setTyporgcod(String typorgcod) {
        this.typorgcod = typorgcod;
    }

    public String getEveobs() {
        return eveobs;
    }

    public Parpol eveobs(String eveobs) {
        this.eveobs = eveobs;
        return this;
    }

    public void setEveobs(String eveobs) {
        this.eveobs = eveobs;
    }

    public String getOrgart() {
        return orgart;
    }

    public Parpol orgart(String orgart) {
        this.orgart = orgart;
        return this;
    }

    public void setOrgart(String orgart) {
        this.orgart = orgart;
    }

    public Integer getOrgnumtri() {
        return orgnumtri;
    }

    public Parpol orgnumtri(Integer orgnumtri) {
        this.orgnumtri = orgnumtri;
        return this;
    }

    public void setOrgnumtri(Integer orgnumtri) {
        this.orgnumtri = orgnumtri;
    }

    public LocalDate getOrgdatfin() {
        return orgdatfin;
    }

    public Parpol orgdatfin(LocalDate orgdatfin) {
        this.orgdatfin = orgdatfin;
        return this;
    }

    public void setOrgdatfin(LocalDate orgdatfin) {
        this.orgdatfin = orgdatfin;
    }

    public String getOrgnumtie() {
        return orgnumtie;
    }

    public Parpol orgnumtie(String orgnumtie) {
        this.orgnumtie = orgnumtie;
        return this;
    }

    public void setOrgnumtie(String orgnumtie) {
        this.orgnumtie = orgnumtie;
    }

    public String getOrgurlsim() {
        return orgurlsim;
    }

    public Parpol orgurlsim(String orgurlsim) {
        this.orgurlsim = orgurlsim;
        return this;
    }

    public void setOrgurlsim(String orgurlsim) {
        this.orgurlsim = orgurlsim;
    }

    public String getOrgurlcmp() {
        return orgurlcmp;
    }

    public Parpol orgurlcmp(String orgurlcmp) {
        this.orgurlcmp = orgurlcmp;
        return this;
    }

    public void setOrgurlcmp(String orgurlcmp) {
        this.orgurlcmp = orgurlcmp;
    }

    public String getOrgtemannu() {
        return orgtemannu;
    }

    public Parpol orgtemannu(String orgtemannu) {
        this.orgtemannu = orgtemannu;
        return this;
    }

    public void setOrgtemannu(String orgtemannu) {
        this.orgtemannu = orgtemannu;
    }

    public String getEvetempub() {
        return evetempub;
    }

    public Parpol evetempub(String evetempub) {
        this.evetempub = evetempub;
        return this;
    }

    public void setEvetempub(String evetempub) {
        this.evetempub = evetempub;
    }

    public LocalDate getSyscredat() {
        return syscredat;
    }

    public Parpol syscredat(LocalDate syscredat) {
        this.syscredat = syscredat;
        return this;
    }

    public void setSyscredat(LocalDate syscredat) {
        this.syscredat = syscredat;
    }

    public String getSyscrelog() {
        return syscrelog;
    }

    public Parpol syscrelog(String syscrelog) {
        this.syscrelog = syscrelog;
        return this;
    }

    public void setSyscrelog(String syscrelog) {
        this.syscrelog = syscrelog;
    }

    public LocalDate getSysmajdat() {
        return sysmajdat;
    }

    public Parpol sysmajdat(LocalDate sysmajdat) {
        this.sysmajdat = sysmajdat;
        return this;
    }

    public void setSysmajdat(LocalDate sysmajdat) {
        this.sysmajdat = sysmajdat;
    }

    public String getSysmajlog() {
        return sysmajlog;
    }

    public Parpol sysmajlog(String sysmajlog) {
        this.sysmajlog = sysmajlog;
        return this;
    }

    public void setSysmajlog(String sysmajlog) {
        this.sysmajlog = sysmajlog;
    }

    public String getEvelil() {
        return evelil;
    }

    public Parpol evelil(String evelil) {
        this.evelil = evelil;
        return this;
    }

    public void setEvelil(String evelil) {
        this.evelil = evelil;
    }

    public String getEvelib() {
        return evelib;
    }

    public Parpol evelib(String evelib) {
        this.evelib = evelib;
        return this;
    }

    public void setEvelib(String evelib) {
        this.evelib = evelib;
    }

    public String getEvelic() {
        return evelic;
    }

    public Parpol evelic(String evelic) {
        this.evelic = evelic;
        return this;
    }

    public void setEvelic(String evelic) {
        this.evelic = evelic;
    }

    public String getTemvalcod() {
        return temvalcod;
    }

    public Parpol temvalcod(String temvalcod) {
        this.temvalcod = temvalcod;
        return this;
    }

    public void setTemvalcod(String temvalcod) {
        this.temvalcod = temvalcod;
    }

    public LocalDate getOrgdatcre() {
        return orgdatcre;
    }

    public Parpol orgdatcre(LocalDate orgdatcre) {
        this.orgdatcre = orgdatcre;
        return this;
    }

    public void setOrgdatcre(LocalDate orgdatcre) {
        this.orgdatcre = orgdatcre;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Parpol)) {
            return false;
        }
        return id != null && id.equals(((Parpol) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Parpol{" +
            "id=" + getId() +
            ", tenpolcod='" + getTenpolcod() + "'" +
            ", orgcod='" + getOrgcod() + "'" +
            ", typparpolcod='" + getTypparpolcod() + "'" +
            ", typorgcod='" + getTyporgcod() + "'" +
            ", eveobs='" + getEveobs() + "'" +
            ", orgart='" + getOrgart() + "'" +
            ", orgnumtri=" + getOrgnumtri() +
            ", orgdatfin='" + getOrgdatfin() + "'" +
            ", orgnumtie='" + getOrgnumtie() + "'" +
            ", orgurlsim='" + getOrgurlsim() + "'" +
            ", orgurlcmp='" + getOrgurlcmp() + "'" +
            ", orgtemannu='" + getOrgtemannu() + "'" +
            ", evetempub='" + getEvetempub() + "'" +
            ", syscredat='" + getSyscredat() + "'" +
            ", syscrelog='" + getSyscrelog() + "'" +
            ", sysmajdat='" + getSysmajdat() + "'" +
            ", sysmajlog='" + getSysmajlog() + "'" +
            ", evelil='" + getEvelil() + "'" +
            ", evelib='" + getEvelib() + "'" +
            ", evelic='" + getEvelic() + "'" +
            ", temvalcod='" + getTemvalcod() + "'" +
            ", orgdatcre='" + getOrgdatcre() + "'" +
            "}";
    }
}
