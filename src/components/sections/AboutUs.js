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
          }}
        >
          <Typography
            component="h1"
            variant="title"
            align="center"
            color={theme.palette.title.main}
            sx={{ pt: 6, pb: 3 }}
          >
            About Us
          </Typography>

          <Typography variant="h4" align="center">
            We at Eqaim focus on developing tech solutions for customers across the
            globe. We help startups and businesses in early stage looking for tech support
            so that they can focus on core business and leave their tech problems to
            us.
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={12}
            sx={{ pb: 12, pt: 6 }}
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
