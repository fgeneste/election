package fr.senat.election.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;

/**
 * A Sen.
 */
@Entity
@Table(name = "sen")
public class Sen implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "senmat")
    private String senmat;

    @Column(name = "quacod")
    private String quacod;

    @Column(name = "sennomuse")
    private String sennomuse;

    @Column(name = "sennompat")
    private String sennompat;

    @Column(name = "sennommar")
    private String sennommar;

    @Column(name = "sennomtec")
    private String sennomtec;

    @Column(name = "senprenomuse")
    private String senprenomuse;

    @Column(name = "senprenomciv")
    private String senprenomciv;

    @Column(name = "sendatnai")
    private LocalDate sendatnai;

    @Column(name = "senlienai")
    private String senlienai;

    @Column(name = "sendatdec")
    private LocalDate sendatdec;

    @Column(name = "etasencod")
    private String etasencod;

    @Column(name = "sendespro")
    private String sendespro;

    @Column(name = "pcscod")
    private String pcscod;

    @Column(name = "catprocod")
    private String catprocod;

    @Column(name = "senrngprt")
    private Long senrngprt;

    @Column(name = "sengrppolcodcou")
    private String sengrppolcodcou;

    @Column(name = "sengrppolliccou")
    private String sengrppolliccou;

    @Column(name = "sentypappcou")
    private String sentypappcou;

    @Column(name = "sencomcodcou")
    private String sencomcodcou;

    @Column(name = "sencomliccou")
    private String sencomliccou;

    @Column(name = "sencirnumcou")
    private Long sencirnumcou;

    @Column(name = "sencircou")
    private String sencircou;

    @Column(name = "senburliccou")
    private String senburliccou;

    @Column(name = "senema")
    private String senema;

    @Column(name = "sennumtelsen")
    private String sennumtelsen;

    @Column(name = "sendiplome")
    private String sendiplome;

    @Column(name = "sendecora")
    private String sendecora;

    @Column(name = "sendatpreele")
    private Instant sendatpreele;

    @Column(name = "indid")
    private Long indid;

    @Column(name = "sennomusecap")
    private String sennomusecap;

    @Column(name = "senpagper")
    private String senpagper;

    @Column(name = "senrngprtcod")
    private String senrngprtcod;

    @Column(name = "parpolorgcod")
    private String parpolorgcod;

    @Column(name = "senliedec")
    private String senliedec;

    @Column(name = "sendptnumnai")
    private Long sendptnumnai;

    @Column(name = "sendptnumdec")
    private Long sendptnumdec;

    @Column(name = "senauttra")
    private String senauttra;

    @Column(name = "senlog")
    private String senlog;

    @Column(name = "sencrinom")
    private String sencrinom;

    @Column(name = "senfem")
    private String senfem;

    @Column(name = "senautema")
    private String senautema;

    @Column(name = "senautgrpsen")
    private String senautgrpsen;

    @Column(name = "senautpagper")
    private String senautpagper;

    @Column(name = "sennbrque")
    private Long sennbrque;

    @Column(name = "sennomdis")
    private String sennomdis;

    @Column(name = "numsen")
    private String numsen;

    @Column(name = "sennumsie")
    private Long sennumsie;

    @Column(name = "sennbrvid")
    private Long sennbrvid;

    @Column(name = "sennomdit")
    private String sennomdit;

    @Column(name = "titnobcod")
    private String titnobcod;

    @OneToOne(mappedBy = "sen")
    @JsonIgnore
    private Association association;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSenmat() {
        return senmat;
    }

    public Sen senmat(String senmat) {
        this.senmat = senmat;
        return this;
    }

    public void setSenmat(String senmat) {
        this.senmat = senmat;
    }

    public String getQuacod() {
        return quacod;
    }

    public Sen quacod(String quacod) {
        this.quacod = quacod;
        return this;
    }

    public void setQuacod(String quacod) {
        this.quacod = quacod;
    }

    public String getSennomuse() {
        return sennomuse;
    }

    public Sen sennomuse(String sennomuse) {
        this.sennomuse = sennomuse;
        return this;
    }

    public void setSennomuse(String sennomuse) {
        this.sennomuse = sennomuse;
    }

    public String getSennompat() {
        return sennompat;
    }

    public Sen sennompat(String sennompat) {
        this.sennompat = sennompat;
        return this;
    }

    public void setSennompat(String sennompat) {
        this.sennompat = sennompat;
    }

    public String getSennommar() {
        return sennommar;
    }

    public Sen sennommar(String sennommar) {
        this.sennommar = sennommar;
        return this;
    }

    public void setSennommar(String sennommar) {
        this.sennommar = sennommar;
    }

    public String getSennomtec() {
        return sennomtec;
    }

    public Sen sennomtec(String sennomtec) {
        this.sennomtec = sennomtec;
        return this;
    }

    public void setSennomtec(String sennomtec) {
        this.sennomtec = sennomtec;
    }

    public String getSenprenomuse() {
        return senprenomuse;
    }

    public Sen senprenomuse(String senprenomuse) {
        this.senprenomuse = senprenomuse;
        return this;
    }

    public void setSenprenomuse(String senprenomuse) {
        this.senprenomuse = senprenomuse;
    }

    public String getSenprenomciv() {
        return senprenomciv;
    }

    public Sen senprenomciv(String senprenomciv) {
        this.senprenomciv = senprenomciv;
        return this;
    }

    public void setSenprenomciv(String senprenomciv) {
        this.senprenomciv = senprenomciv;
    }

    public LocalDate getSendatnai() {
        return sendatnai;
    }

    public Sen sendatnai(LocalDate sendatnai) {
        this.sendatnai = sendatnai;
        return this;
    }

    public void setSendatnai(LocalDate sendatnai) {
        this.sendatnai = sendatnai;
    }

    public String getSenlienai() {
        return senlienai;
    }

    public Sen senlienai(String senlienai) {
        this.senlienai = senlienai;
        return this;
    }

    public void setSenlienai(String senlienai) {
        this.senlienai = senlienai;
    }

    public LocalDate getSendatdec() {
        return sendatdec;
    }

    public Sen sendatdec(LocalDate sendatdec) {
        this.sendatdec = sendatdec;
        return this;
    }

    public void setSendatdec(LocalDate sendatdec) {
        this.sendatdec = sendatdec;
    }

    public String getEtasencod() {
        return etasencod;
    }

    public Sen etasencod(String etasencod) {
        this.etasencod = etasencod;
        return this;
    }

    public void setEtasencod(String etasencod) {
        this.etasencod = etasencod;
    }

    public String getSendespro() {
        return sendespro;
    }

    public Sen sendespro(String sendespro) {
        this.sendespro = sendespro;
        return this;
    }

    public void setSendespro(String sendespro) {
        this.sendespro = sendespro;
    }

    public String getPcscod() {
        return pcscod;
    }

    public Sen pcscod(String pcscod) {
        this.pcscod = pcscod;
        return this;
    }

    public void setPcscod(String pcscod) {
        this.pcscod = pcscod;
    }

    public String getCatprocod() {
        return catprocod;
    }

    public Sen catprocod(String catprocod) {
        this.catprocod = catprocod;
        return this;
    }

    public void setCatprocod(String catprocod) {
        this.catprocod = catprocod;
    }

    public Long getSenrngprt() {
        return senrngprt;
    }

    public Sen senrngprt(Long senrngprt) {
        this.senrngprt = senrngprt;
        return this;
    }

    public void setSenrngprt(Long senrngprt) {
        this.senrngprt = senrngprt;
    }

    public String getSengrppolcodcou() {
        return sengrppolcodcou;
    }

    public Sen sengrppolcodcou(String sengrppolcodcou) {
        this.sengrppolcodcou = sengrppolcodcou;
        return this;
    }

    public void setSengrppolcodcou(String sengrppolcodcou) {
        this.sengrppolcodcou = sengrppolcodcou;
    }

    public String getSengrppolliccou() {
        return sengrppolliccou;
    }

    public Sen sengrppolliccou(String sengrppolliccou) {
        this.sengrppolliccou = sengrppolliccou;
        return this;
    }

    public void setSengrppolliccou(String sengrppolliccou) {
        this.sengrppolliccou = sengrppolliccou;
    }

    public String getSentypappcou() {
        return sentypappcou;
    }

    public Sen sentypappcou(String sentypappcou) {
        this.sentypappcou = sentypappcou;
        return this;
    }

    public void setSentypappcou(String sentypappcou) {
        this.sentypappcou = sentypappcou;
    }

    public String getSencomcodcou() {
        return sencomcodcou;
    }

    public Sen sencomcodcou(String sencomcodcou) {
        this.sencomcodcou = sencomcodcou;
        return this;
    }

    public void setSencomcodcou(String sencomcodcou) {
        this.sencomcodcou = sencomcodcou;
    }

    public String getSencomliccou() {
        return sencomliccou;
    }

    public Sen sencomliccou(String sencomliccou) {
        this.sencomliccou = sencomliccou;
        return this;
    }

    public void setSencomliccou(String sencomliccou) {
        this.sencomliccou = sencomliccou;
    }

    public Long getSencirnumcou() {
        return sencirnumcou;
    }

    public Sen sencirnumcou(Long sencirnumcou) {
        this.sencirnumcou = sencirnumcou;
        return this;
    }

    public void setSencirnumcou(Long sencirnumcou) {
        this.sencirnumcou = sencirnumcou;
    }

    public String getSencircou() {
        return sencircou;
    }

    public Sen sencircou(String sencircou) {
        this.sencircou = sencircou;
        return this;
    }

    public void setSencircou(String sencircou) {
        this.sencircou = sencircou;
    }

    public String getSenburliccou() {
        return senburliccou;
    }

    public Sen senburliccou(String senburliccou) {
        this.senburliccou = senburliccou;
        return this;
    }

    public void setSenburliccou(String senburliccou) {
        this.senburliccou = senburliccou;
    }

    public String getSenema() {
        return senema;
    }

    public Sen senema(String senema) {
        this.senema = senema;
        return this;
    }

    public void setSenema(String senema) {
        this.senema = senema;
    }

    public String getSennumtelsen() {
        return sennumtelsen;
    }

    public Sen sennumtelsen(String sennumtelsen) {
        this.sennumtelsen = sennumtelsen;
        return this;
    }

    public void setSennumtelsen(String sennumtelsen) {
        this.sennumtelsen = sennumtelsen;
    }

    public String getSendiplome() {
        return sendiplome;
    }

    public Sen sendiplome(String sendiplome) {
        this.sendiplome = sendiplome;
        return this;
    }

    public void setSendiplome(String sendiplome) {
        this.sendiplome = sendiplome;
    }

    public String getSendecora() {
        return sendecora;
    }

    public Sen sendecora(String sendecora) {
        this.sendecora = sendecora;
        return this;
    }

    public void setSendecora(String sendecora) {
        this.sendecora = sendecora;
    }

    public Instant getSendatpreele() {
        return sendatpreele;
    }

    public Sen sendatpreele(Instant sendatpreele) {
        this.sendatpreele = sendatpreele;
        return this;
    }

    public void setSendatpreele(Instant sendatpreele) {
        this.sendatpreele = sendatpreele;
    }

    public Long getIndid() {
        return indid;
    }

    public Sen indid(Long indid) {
        this.indid = indid;
        return this;
    }

    public void setIndid(Long indid) {
        this.indid = indid;
    }

    public String getSennomusecap() {
        return sennomusecap;
    }

    public Sen sennomusecap(String sennomusecap) {
        this.sennomusecap = sennomusecap;
        return this;
    }

    public void setSennomusecap(String sennomusecap) {
        this.sennomusecap = sennomusecap;
    }

    public String getSenpagper() {
        return senpagper;
    }

    public Sen senpagper(String senpagper) {
        this.senpagper = senpagper;
        return this;
    }

    public void setSenpagper(String senpagper) {
        this.senpagper = senpagper;
    }

    public String getSenrngprtcod() {
        return senrngprtcod;
    }

    public Sen senrngprtcod(String senrngprtcod) {
        this.senrngprtcod = senrngprtcod;
        return this;
    }

    public void setSenrngprtcod(String senrngprtcod) {
        this.senrngprtcod = senrngprtcod;
    }

    public String getParpolorgcod() {
        return parpolorgcod;
    }

    public Sen parpolorgcod(String parpolorgcod) {
        this.parpolorgcod = parpolorgcod;
        return this;
    }

    public void setParpolorgcod(String parpolorgcod) {
        this.parpolorgcod = parpolorgcod;
    }

    public String getSenliedec() {
        return senliedec;
    }

    public Sen senliedec(String senliedec) {
        this.senliedec = senliedec;
        return this;
    }

    public void setSenliedec(String senliedec) {
        this.senliedec = senliedec;
    }

    public Long getSendptnumnai() {
        return sendptnumnai;
    }

    public Sen sendptnumnai(Long sendptnumnai) {
        this.sendptnumnai = sendptnumnai;
        return this;
    }

    public void setSendptnumnai(Long sendptnumnai) {
        this.sendptnumnai = sendptnumnai;
    }

    public Long getSendptnumdec() {
        return sendptnumdec;
    }

    public Sen sendptnumdec(Long sendptnumdec) {
        this.sendptnumdec = sendptnumdec;
        return this;
    }

    public void setSendptnumdec(Long sendptnumdec) {
        this.sendptnumdec = sendptnumdec;
    }

    public String getSenauttra() {
        return senauttra;
    }

    public Sen senauttra(String senauttra) {
        this.senauttra = senauttra;
        return this;
    }

    public void setSenauttra(String senauttra) {
        this.senauttra = senauttra;
    }

    public String getSenlog() {
        return senlog;
    }

    public Sen senlog(String senlog) {
        this.senlog = senlog;
        return this;
    }

    public void setSenlog(String senlog) {
        this.senlog = senlog;
    }

    public String getSencrinom() {
        return sencrinom;
    }

    public Sen sencrinom(String sencrinom) {
        this.sencrinom = sencrinom;
        return this;
    }

    public void setSencrinom(String sencrinom) {
        this.sencrinom = sencrinom;
    }

    public String getSenfem() {
        return senfem;
    }

    public Sen senfem(String senfem) {
        this.senfem = senfem;
        return this;
    }

    public void setSenfem(String senfem) {
        this.senfem = senfem;
    }

    public String getSenautema() {
        return senautema;
    }

    public Sen senautema(String senautema) {
        this.senautema = senautema;
        return this;
    }

    public void setSenautema(String senautema) {
        this.senautema = senautema;
    }

    public String getSenautgrpsen() {
        return senautgrpsen;
    }

    public Sen senautgrpsen(String senautgrpsen) {
        this.senautgrpsen = senautgrpsen;
        return this;
    }

    public void setSenautgrpsen(String senautgrpsen) {
        this.senautgrpsen = senautgrpsen;
    }

    public String getSenautpagper() {
        return senautpagper;
    }

    public Sen senautpagper(String senautpagper) {
        this.senautpagper = senautpagper;
        return this;
    }

    public void setSenautpagper(String senautpagper) {
        this.senautpagper = senautpagper;
    }

    public Long getSennbrque() {
        return sennbrque;
    }

    public Sen sennbrque(Long sennbrque) {
        this.sennbrque = sennbrque;
        return this;
    }

    public void setSennbrque(Long sennbrque) {
        this.sennbrque = sennbrque;
    }

    public String getSennomdis() {
        return sennomdis;
    }

    public Sen sennomdis(String sennomdis) {
        this.sennomdis = sennomdis;
        return this;
    }

    public void setSennomdis(String sennomdis) {
        this.sennomdis = sennomdis;
    }

    public String getNumsen() {
        return numsen;
    }

    public Sen numsen(String numsen) {
        this.numsen = numsen;
        return this;
    }

    public void setNumsen(String numsen) {
        this.numsen = numsen;
    }

    public Long getSennumsie() {
        return sennumsie;
    }

    public Sen sennumsie(Long sennumsie) {
        this.sennumsie = sennumsie;
        return this;
    }

    public void setSennumsie(Long sennumsie) {
        this.sennumsie = sennumsie;
    }

    public Long getSennbrvid() {
        return sennbrvid;
    }

    public Sen sennbrvid(Long sennbrvid) {
        this.sennbrvid = sennbrvid;
        return this;
    }

    public void setSennbrvid(Long sennbrvid) {
        this.sennbrvid = sennbrvid;
    }

    public String getSennomdit() {
        return sennomdit;
    }

    public Sen sennomdit(String sennomdit) {
        this.sennomdit = sennomdit;
        return this;
    }

    public void setSennomdit(String sennomdit) {
        this.sennomdit = sennomdit;
    }

    public String getTitnobcod() {
        return titnobcod;
    }

    public Sen titnobcod(String titnobcod) {
        this.titnobcod = titnobcod;
        return this;
    }

    public void setTitnobcod(String titnobcod) {
        this.titnobcod = titnobcod;
    }

    public Association getAssociation() {
        return association;
    }

    public Sen association(Association association) {
        this.association = association;
        return this;
    }

    public void setAssociation(Association association) {
        this.association = association;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Sen)) {
            return false;
        }
        return id != null && id.equals(((Sen) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Sen{" +
            "id=" + getId() +
            ", senmat='" + getSenmat() + "'" +
            ", quacod='" + getQuacod() + "'" +
            ", sennomuse='" + getSennomuse() + "'" +
            ", sennompat='" + getSennompat() + "'" +
            ", sennommar='" + getSennommar() + "'" +
            ", sennomtec='" + getSennomtec() + "'" +
            ", senprenomuse='" + getSenprenomuse() + "'" +
            ", senprenomciv='" + getSenprenomciv() + "'" +
            ", sendatnai='" + getSendatnai() + "'" +
            ", senlienai='" + getSenlienai() + "'" +
            ", sendatdec='" + getSendatdec() + "'" +
            ", etasencod='" + getEtasencod() + "'" +
            ", sendespro='" + getSendespro() + "'" +
            ", pcscod='" + getPcscod() + "'" +
            ", catprocod='" + getCatprocod() + "'" +
            ", senrngprt=" + getSenrngprt() +
            ", sengrppolcodcou='" + getSengrppolcodcou() + "'" +
            ", sengrppolliccou='" + getSengrppolliccou() + "'" +
            ", sentypappcou='" + getSentypappcou() + "'" +
            ", sencomcodcou='" + getSencomcodcou() + "'" +
            ", sencomliccou='" + getSencomliccou() + "'" +
            ", sencirnumcou=" + getSencirnumcou() +
            ", sencircou='" + getSencircou() + "'" +
            ", senburliccou='" + getSenburliccou() + "'" +
            ", senema='" + getSenema() + "'" +
            ", sennumtelsen='" + getSennumtelsen() + "'" +
            ", sendiplome='" + getSendiplome() + "'" +
            ", sendecora='" + getSendecora() + "'" +
            ", sendatpreele='" + getSendatpreele() + "'" +
            ", indid=" + getIndid() +
            ", sennomusecap='" + getSennomusecap() + "'" +
            ", senpagper='" + getSenpagper() + "'" +
            ", senrngprtcod='" + getSenrngprtcod() + "'" +
            ", parpolorgcod='" + getParpolorgcod() + "'" +
            ", senliedec='" + getSenliedec() + "'" +
            ", sendptnumnai=" + getSendptnumnai() +
            ", sendptnumdec=" + getSendptnumdec() +
            ", senauttra='" + getSenauttra() + "'" +
            ", senlog='" + getSenlog() + "'" +
            ", sencrinom='" + getSencrinom() + "'" +
            ", senfem='" + getSenfem() + "'" +
            ", senautema='" + getSenautema() + "'" +
            ", senautgrpsen='" + getSenautgrpsen() + "'" +
            ", senautpagper='" + getSenautpagper() + "'" +
            ", sennbrque=" + getSennbrque() +
            ", sennomdis='" + getSennomdis() + "'" +
            ", numsen='" + getNumsen() + "'" +
            ", sennumsie=" + getSennumsie() +
            ", sennbrvid=" + getSennbrvid() +
            ", sennomdit='" + getSennomdit() + "'" +
            ", titnobcod='" + getTitnobcod() + "'" +
            "}";
    }
}
