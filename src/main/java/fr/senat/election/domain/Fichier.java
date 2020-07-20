package fr.senat.election.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Fichier.
 */
@Entity
@Table(name = "fichier")
public class Fichier implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    
    @Column(name = "filename", unique = true)
    private String filename;

    @Column(name = "path")
    private String path;

    @Column(name = "type")
    private String type;

    @Column(name = "traite")
    private Boolean traite;

    @Column(name = "date_traitement")
    private Instant dateTraitement;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public Fichier filename(String filename) {
        this.filename = filename;
        return this;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getPath() {
        return path;
    }

    public Fichier path(String path) {
        this.path = path;
        return this;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getType() {
        return type;
    }

    public Fichier type(String type) {
        this.type = type;
        return this;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean isTraite() {
        return traite;
    }

    public Fichier traite(Boolean traite) {
        this.traite = traite;
        return this;
    }

    public void setTraite(Boolean traite) {
        this.traite = traite;
    }

    public Instant getDateTraitement() {
        return dateTraitement;
    }

    public Fichier dateTraitement(Instant dateTraitement) {
        this.dateTraitement = dateTraitement;
        return this;
    }

    public void setDateTraitement(Instant dateTraitement) {
        this.dateTraitement = dateTraitement;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Fichier)) {
            return false;
        }
        return id != null && id.equals(((Fichier) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Fichier{" +
            "id=" + getId() +
            ", filename='" + getFilename() + "'" +
            ", path='" + getPath() + "'" +
            ", type='" + getType() + "'" +
            ", traite='" + isTraite() + "'" +
            ", dateTraitement='" + getDateTraitement() + "'" +
            "}";
    }
}
