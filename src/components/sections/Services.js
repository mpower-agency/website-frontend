import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import ServiceCard from "../elements/ServiceCard";
import ServicesData from "../../data/ServicesData";

const Services = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container
          id="Services"
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
            sx={{ p: 6 }}
          >
            Services
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={12}
            sx={{ pb: 12 }}
          >
            {ServicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} image={service.image} description={service.description} skills={service.skills} />
            ))
            }
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Services;
