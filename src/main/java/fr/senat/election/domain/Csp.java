package fr.senat.election.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A Csp.
 */
@Entity
@Table(name = "csp")
public class Csp implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "cspcod", nullable = false)
    private String cspcod;

    @Column(name = "catprocod")
    private String catprocod;

    @Column(name = "cspfamcod")
    private String cspfamcod;

    @Column(name = "csplib")
    private String csplib;

    @Column(name = "cspnumtri")
    private Long cspnumtri;

    @Column(name = "syscredat")
    private LocalDate syscredat;

    @Column(name = "syscrelog")
    private String syscrelog;

    @Column(name = "sysmajdat")
    private LocalDate sysmajdat;

    @Column(name = "sysmajlog")
    private String sysmajlog;

    @OneToMany(mappedBy = "csp")
    private Set<Candidat> candidats = new HashSet<>();

    @OneToMany(mappedBy = "csp")
    private Set<Elu> elus = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCspcod() {
        return cspcod;
    }

    public Csp cspcod(String cspcod) {
        this.cspcod = cspcod;
        return this;
    }

    public void setCspcod(String cspcod) {
        this.cspcod = cspcod;
    }

    public String getCatprocod() {
        return catprocod;
    }

    public Csp catprocod(String catprocod) {
        this.catprocod = catprocod;
        return this;
    }

    public void setCatprocod(String catprocod) {
        this.catprocod = catprocod;
    }

    public String getCspfamcod() {
        return cspfamcod;
    }

    public Csp cspfamcod(String cspfamcod) {
        this.cspfamcod = cspfamcod;
        return this;
    }

    public void setCspfamcod(String cspfamcod) {
        this.cspfamcod = cspfamcod;
    }

    public String getCsplib() {
        return csplib;
    }

    public Csp csplib(String csplib) {
        this.csplib = csplib;
        return this;
    }

    public void setCsplib(String csplib) {
        this.csplib = csplib;
    }

    public Long getCspnumtri() {
        return cspnumtri;
    }

    public Csp cspnumtri(Long cspnumtri) {
        this.cspnumtri = cspnumtri;
        return this;
    }

    public void setCspnumtri(Long cspnumtri) {
        this.cspnumtri = cspnumtri;
    }

    public LocalDate getSyscredat() {
        return syscredat;
    }

    public Csp syscredat(LocalDate syscredat) {
        this.syscredat = syscredat;
        return this;
    }

    public void setSyscredat(LocalDate syscredat) {
        this.syscredat = syscredat;
    }

    public String getSyscrelog() {
        return syscrelog;
    }

    public Csp syscrelog(String syscrelog) {
        this.syscrelog = syscrelog;
        return this;
    }

    public void setSyscrelog(String syscrelog) {
        this.syscrelog = syscrelog;
    }

    public LocalDate getSysmajdat() {
        return sysmajdat;
    }

    public Csp sysmajdat(LocalDate sysmajdat) {
        this.sysmajdat = sysmajdat;
        return this;
    }

    public void setSysmajdat(LocalDate sysmajdat) {
        this.sysmajdat = sysmajdat;
    }

    public String getSysmajlog() {
        return sysmajlog;
    }

    public Csp sysmajlog(String sysmajlog) {
        this.sysmajlog = sysmajlog;
        return this;
    }

    public void setSysmajlog(String sysmajlog) {
        this.sysmajlog = sysmajlog;
    }

    public Set<Candidat> getCandidats() {
        return candidats;
    }

    public Csp candidats(Set<Candidat> candidats) {
        this.candidats = candidats;
        return this;
    }

    public Csp addCandidat(Candidat candidat) {
        this.candidats.add(candidat);
        candidat.setCsp(this);
        return this;
    }

    public Csp removeCandidat(Candidat candidat) {
        this.candidats.remove(candidat);
        candidat.setCsp(null);
        return this;
    }

    public void setCandidats(Set<Candidat> candidats) {
        this.candidats = candidats;
    }

    public Set<Elu> getElus() {
        return elus;
    }

    public Csp elus(Set<Elu> elus) {
        this.elus = elus;
        return this;
    }

    public Csp addElu(Elu elu) {
        this.elus.add(elu);
        elu.setCsp(this);
        return this;
    }

    public Csp removeElu(Elu elu) {
        this.elus.remove(elu);
        elu.setCsp(null);
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
        if (!(o instanceof Csp)) {
            return false;
        }
        return id != null && id.equals(((Csp) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Csp{" +
            "id=" + getId() +
            ", cspcod='" + getCspcod() + "'" +
            ", catprocod='" + getCatprocod() + "'" +
            ", cspfamcod='" + getCspfamcod() + "'" +
            ", csplib='" + getCsplib() + "'" +
            ", cspnumtri=" + getCspnumtri() +
            ", syscredat='" + getSyscredat() + "'" +
            ", syscrelog='" + getSyscrelog() + "'" +
            ", sysmajdat='" + getSysmajdat() + "'" +
            ", sysmajlog='" + getSysmajlog() + "'" +
            "}";
    }
}
