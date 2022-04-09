import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import theme from "../../theme";
import ContactUsForm from "../elements/ContactUsForm";

const ContactUs = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container id="Contact" fixed sx={{ pt: 8, pb: 3 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 5, md: 0 },
              }}
            >
              <Box>
                <Box>
                  <Typography
                    color={theme.palette.title.main}
                    component="h1"
                    variant="title"
                  >
                    Contact Us
                  </Typography>
                </Box>
                <Box paddingRight={2}>
                  <Typography variant="h4" component="h4" color="black">
                    You have questions and want to discuss?
                  </Typography>
                  <Typography variant="h4" component="h4" color="black">
                    We’d love to hear from you!
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} padding={2}>
              <ContactUsForm />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default ContactUs;
