import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, scroller } from "react-scroll";

const IntroContent = () => {
  const scrollToContactUs = (offset) => {
    scroller.scrollTo("ContactUs", {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  };

  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pl: 6 }}>
      <Typography
        component="h1"
        variant="h1"
        align="left"
        color="primary.main"
        gutterBottom
      >
        Ideas to Action
      </Typography>
      <Typography
        variant="main"
        align="left"
        color="secondary.contrastText"
        component="p"
      >
        Eqaim provides technology and business process services to help build
        your startup digital products. We help you in every step of your ideas
        to action process by providing the best in class services.
      </Typography>

      <Button
        variant="text"
        sx={[
          { borderRadius: "6px" },
          { boxShadow: 3 },
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
        <Typography variant="main" noWrap>
          <Link
            className="headerlink"
            to="Contact Us"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Let's Connect
          </Link>
        </Typography>
      </Button>
    </Container>
  );
};

export default IntroContent;
