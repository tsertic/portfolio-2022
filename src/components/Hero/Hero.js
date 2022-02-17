import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am an full-stack web developer and know something about UI/UX also.
        React and NextJs are my speciality. Feel free to take a look at my
        latest projects on the web portfolio page.
      </SectionText>
      <Button
        onClicl={() => {
          window.location = "https://google.com";
        }}
      >
        Learm More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
