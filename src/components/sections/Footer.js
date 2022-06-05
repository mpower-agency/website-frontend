import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import FooterIcons from "../elements/FooterIcons";
import FooterLinks from "../elements/FooterLinks";
import BrandLogo from "../../assets/images/eqaim_logo.svg";
import { scroller } from "react-scroll";
import { Paper, Button } from "@mui/material";

const scrollTo = (offset, index) => {
  scroller.scrollTo(index, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};

function Footer() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Paper sx={{ backgroundColor: theme.palette.footer.main }}>
          <Container
            id="Footer"
            fixed
            component="footer"
            sx={{
              pt: 4,
              px: 2,
              pb: 4,
              mt: "auto",
            }}
          >
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              wrap="wrap"
              spacing={5}
            >
              <Grid item xs={12} md={4}>
                <Box sx={{ width: 350, margin: "auto", px: 5 }}>
                  <Button variant="text" sx={{ p: 0 }}>
                    <img
                      src={BrandLogo}
                      className="align-top"
                      alt="eqaim"
                      onClick={() => scrollTo(-100, "Home")}
                    />
                  </Button>

                  <Typography
                    variant="sub"
                    component="h5"
                    gutterBottom
                    sx={{ fontWeight: "medium" }}
                    color={theme.palette.footer.contrastText}
                  >
                    Eqaim is a tech service company with a vision to bring your
                    bold ideas into reality.
                  </Typography>
                  <Typography
                    variant="sub"
                    component="h5"
                    sx={{ fontWeight: "medium" }}
                    color={theme.palette.footer.contrastText}
                  >
                    eqaim Technology & Services.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ width: 350, py: 2, px: 5, margin: "auto" }}>
                  <Typography
                    variant="text2"
                    align="left"
                    component="h4"
                    gutterBottom
                    color={theme.palette.footer.contrastText}
                    sx={{ fontWeight: "bold" }}
                  >
                    Contact Us
                  </Typography>

                  <Typography
                    variant="sub"
                    component="h5"
                    color={theme.palette.footer.contrastText}
                    gutterBottom
                  >
                    contact@eqaim.com
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="sub"
                    component="h5"
                    color={theme.palette.footer.contrastText}
                    
                  >
                    +91-9522557263
                  </Typography>

                  <FooterIcons />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <FooterLinks />
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default Footer;
