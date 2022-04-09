import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import TestimonialSlider from "../elements/TestimonialSlider";

const Testimonials = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container fixed id="Testimonials" sx={{ pt: 8 }}>
          <TestimonialSlider />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Testimonials;
