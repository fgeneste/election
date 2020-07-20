package fr.senat.election.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import fr.senat.election.web.rest.TestUtil;

public class SenTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Sen.class);
        Sen sen1 = new Sen();
        sen1.setId(1L);
        Sen sen2 = new Sen();
        sen2.setId(sen1.getId());
        assertThat(sen1).isEqualTo(sen2);
        sen2.setId(2L);
        assertThat(sen1).isNotEqualTo(sen2);
        sen1.setId(null);
        assertThat(sen1).isNotEqualTo(sen2);
    }
}
