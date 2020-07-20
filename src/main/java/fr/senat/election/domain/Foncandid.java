package fr.senat.election.domain;


import javax.persistence.*;

import java.io.Serializable;

/**
 * A Foncandid.
 */
@Entity
@Table(name = "foncandid")
public class Foncandid implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "foncandidcod")
    private String foncandidcod;

    @Column(name = "foncandidlibfem")
    private String foncandidlibfem;

    @Column(name = "foncandidlib")
    private String foncandidlib;

    @Column(name = "foncandidlic")
    private String foncandidlic;

    @Column(name = "foncandidlicfem")
    private String foncandidlicfem;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFoncandidcod() {
        return foncandidcod;
    }

    public Foncandid foncandidcod(String foncandidcod) {
        this.foncandidcod = foncandidcod;
        return this;
    }

    public void setFoncandidcod(String foncandidcod) {
        this.foncandidcod = foncandidcod;
    }

    public String getFoncandidlibfem() {
        return foncandidlibfem;
    }

    public Foncandid foncandidlibfem(String foncandidlibfem) {
        this.foncandidlibfem = foncandidlibfem;
        return this;
    }

    public void setFoncandidlibfem(String foncandidlibfem) {
        this.foncandidlibfem = foncandidlibfem;
    }

    public String getFoncandidlib() {
        return foncandidlib;
    }

    public Foncandid foncandidlib(String foncandidlib) {
        this.foncandidlib = foncandidlib;
        return this;
    }

    public void setFoncandidlib(String foncandidlib) {
        this.foncandidlib = foncandidlib;
    }

    public String getFoncandidlic() {
        return foncandidlic;
    }

    public Foncandid foncandidlic(String foncandidlic) {
        this.foncandidlic = foncandidlic;
        return this;
    }

    public void setFoncandidlic(String foncandidlic) {
        this.foncandidlic = foncandidlic;
    }

    public String getFoncandidlicfem() {
        return foncandidlicfem;
    }

    public Foncandid foncandidlicfem(String foncandidlicfem) {
        this.foncandidlicfem = foncandidlicfem;
        return this;
    }

    public void setFoncandidlicfem(String foncandidlicfem) {
        this.foncandidlicfem = foncandidlicfem;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Foncandid)) {
            return false;
        }
        return id != null && id.equals(((Foncandid) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Foncandid{" +
            "id=" + getId() +
            ", foncandidcod='" + getFoncandidcod() + "'" +
            ", foncandidlibfem='" + getFoncandidlibfem() + "'" +
            ", foncandidlib='" + getFoncandidlib() + "'" +
            ", foncandidlic='" + getFoncandidlic() + "'" +
            ", foncandidlicfem='" + getFoncandidlicfem() + "'" +
            "}";
    }
}
