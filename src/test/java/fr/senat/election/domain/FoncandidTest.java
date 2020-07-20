package fr.senat.election.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import fr.senat.election.web.rest.TestUtil;

public class FoncandidTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Foncandid.class);
        Foncandid foncandid1 = new Foncandid();
        foncandid1.setId(1L);
        Foncandid foncandid2 = new Foncandid();
        foncandid2.setId(foncandid1.getId());
        assertThat(foncandid1).isEqualTo(foncandid2);
        foncandid2.setId(2L);
        assertThat(foncandid1).isNotEqualTo(foncandid2);
        foncandid1.setId(null);
        assertThat(foncandid1).isNotEqualTo(foncandid2);
    }
}
