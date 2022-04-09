import { Link as MuiLink } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Button from "@mui/material/Button";
import HeadersData from "../../data/HeadersData";
import BrandLogo from "../../assets/images/brand.svg";
import { scroller } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Collapse, Nav, NavbarToggler } from "reactstrap";

import NavElement from "../elements/NavElement";

export default function Header() {
  const scrollTo = (offset, index) => {
    scroller.scrollTo(index, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const getMenuButtons = () => {
    return HeadersData.map((element, index, arr) => {
      if (arr.length - 1 === index) {
        return (
          <Button
            key={index}
            sx={[
              { borderRadius: "6px" },
              { boxShadow: 2 },
              { textTransform: "capitalize" },
              { my: 1, mx: 1 },
              { bgcolor: "primary.main" },
              {
                "&:hover": {
                  color: "primary.contrastText",
                  bgcolor: "primary.main",
                  boxShadow: 2,
                },
              },
            ]}
            onClick={() => scrollTo(-30, element.label)}
          >
            <NavElement
              key={index}
              label={element.label}
              textColour="primary.contrastText"
              variant="buttons"
              setIsOpen={setIsOpen}
            />
          </Button>
        );
      } else {
        return (
          <MuiLink
            key={index}
            variant="main"
            sx={{
              mx: 1.5,
              my: { xs: 0, md: 1.5 },
              "&:hover": {
                color: "primary.main",
              },
            }}
            component="button"
            underline="hover"
          >
            <NavElement
              key={index}
              label={element.label}
              variant="navbar"
              textColour="primary.main"
              setIsOpen={setIsOpen}
            />
          </MuiLink>
        );
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar color="white" expand="md" light fixed="top" className="pb-1">
          <NavbarBrand onClick={() => scrollTo(-100, "Home")}>
            <img src={BrandLogo} className="align-top" alt="eqaim" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse
            isOpen={isOpen}
            navbar
            className="d-md-flex justify-content-md-end"
          >
            <Nav className="mr-auto" navbar>
              {getMenuButtons()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </ThemeProvider>
  );
}
