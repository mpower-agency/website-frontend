import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, scroller } from "react-scroll";

const Introduction = () => {
  const scrollToContactUs = (offset) => {
    scroller.scrollTo("Contact", {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  };

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
                mx: 3,
                boxShadow: 2,
              }}
              alt="IntroImage"
              src={require("../../assets/images/Idea.jpg")}
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
                Eqaim helps start-ups and businesses in translating your ideas
                into reality by providing modern tech solutions.
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
                  Let's Connect
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
