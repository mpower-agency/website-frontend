import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import introdullimg from "../../assets/images/Introdull.svg";
import introcolorimg from "../../assets/images/Introcolor.svg";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, scroller } from "react-scroll";

const Introduction = () => {
  const scrollToContactUs = (offset) => {
    scroller.scrollTo("Contact", {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  };
  const [imgSrc, setImgSrc] = useState(introdullimg);

  const mouseOver = React.useCallback(() => {
    setImgSrc(introcolorimg);
  }, []);

  const mouseOut = React.useCallback(() => {
    setImgSrc(introdullimg);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="100%"
        id="Home"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "secondary.main",
          elevation: 0,
          square: true,
          pt: 16,
          pb: 3,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          wrap="wrap"
          spacing={10}
        >
          <Grid item>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                maxHeight: { xs: 350, md: 350 },
                maxWidth: { xs: 350, md: 350 },
                px: 3,
              }}
              alt="IntroImage"
              src={introcolorimg}
            />
          </Grid>
          <Grid item>
            <Container
              disableGutters
              maxWidth="sm"
              component="main"
              sx={{ px: 3 }}
            >
              <Typography
                component="h1"
                variant="title"
                align="left"
                color={theme.palette.primary.main}
                gutterBottom
              >
                Ideas to Reality
              </Typography>
              <Typography
                variant="h4"
                align="left"
                color="secondary.contrastText"
                component="p"
              >
                Eqaim helps in translating your ideas into reality with the best
                in class talent pool. We help start-ups and businesses to focus
                on business and leave their tech problems for us.
              </Typography>

              <Button
                variant="text"
                sx={[
                  { borderRadius: "6px" },
                  { boxShadow: 4 },
                  { textTransform: "capitalize" },
                  { my: 4, mx: 1 },
                  { bgcolor: "white" },
                  {
                    "&:hover": {
                      color: "primary.contrastText",
                      bgcolor: "primary.main",
                    },
                  },
                ]}
                onClick={() => scrollToContactUs(-100)}
              >
                <Typography variant="buttons" noWrap>
                  <Link to="Contact" smooth={true} offset={-30} duration={500}>
                    Let's Connect
                  </Link>
                </Typography>
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Introduction;
