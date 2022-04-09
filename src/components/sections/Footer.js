import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import FooterIcons from "../elements/FooterIcons";
import FooterLinks from "../elements/FooterLinks";
import BrandLogo from "../../assets/images/brand-white.svg";
import { scroller } from "react-scroll";
import { Paper } from "@mui/material";

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
                  <img
                    src={BrandLogo}
                    className="align-top"
                    alt="eqaim"
                    onClick={() => scrollTo(-100, "Home")}
                  />

                  <Typography
                    variant="h5"
                    component="h5"
                    gutterBottom
                    sx={{ fontWeight: "medium" }}
                    color="white"
                  >
                    Eqaim is a tech service company with a vision to bring your
                    bold ideas into reality.
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h5"
                    sx={{ fontWeight: "medium" }}
                    color="white"
                  >
                    mPower Pvt. Ltd.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ width: 350, py: 2, px: 5, margin: "auto" }}>
                  <Typography
                    variant="h3"
                    align="left"
                    component="h4"
                    gutterBottom
                    color="white"
                  >
                    Contact Us
                  </Typography>

                  <Typography
                    variant="h5"
                    component="h5"
                    color="white"
                    sx={{ fontWeight: "medium" }}
                  >
                    eqaim.admin@gmail.com
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    color="white"
                    sx={{ fontWeight: "medium" }}
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
