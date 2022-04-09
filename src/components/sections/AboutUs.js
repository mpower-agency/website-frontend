import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import AboutUsCard from "../elements/AboutUsCard";
import AboutUsData from "../../data/AboutUsData";
const Services = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container
          id="About"
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "column",
            square: true,
            pt: 8,
          }}
        >
          <Typography
            component="h1"
            variant="title"
            align="center"
            color={theme.palette.title.main}
            sx={{ pb: 3 }}
          >
            About Us
          </Typography>

          <Typography variant="h4" align="center">
            We at Eqaim focus on developing solutions for customers across the
            globe. We help startups in their early age looking for tech support
            so that they can focus on core business and leave tech problems to
            us.
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={12}
            sx={{ pt: 6 }}
          >
            {AboutUsData.map((profile, index) => (
              <AboutUsCard
                key={index}
                name={profile.name}
                subtitle={profile.subtitle}
                image={profile.image}
                linkedinurl={profile.linkedinurl}
              />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Services;
