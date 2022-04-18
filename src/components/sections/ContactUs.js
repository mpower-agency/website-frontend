import React from "react";
import Typography from "@mui/material/Typography";
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
        <Container id="Contact" fixed sx={{ pt: 6, pb: 3 }}>
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
                <Box sx={{alignItems: "center"}}>
                  <Typography
                    align="center"
                    color={theme.palette.primary.main}
                    component="h1"
                    variant="h1"
                    sx={{ pb: 3 }}
                  >
                    Contact Us
                  </Typography>
                </Box>
                <Box paddingRight={2}>
                  <Typography variant="text1"  align="center" component="h4" color="black">
                    Do you have questions and want to discuss?
                  </Typography>
                  <Typography variant="text1"  align="center" component="h4" color="black">
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
