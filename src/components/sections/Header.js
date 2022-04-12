import { Link as MuiLink } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Button from "@mui/material/Button";
import HeadersData from "../../data/HeadersData";
import BrandLogo from "../../assets/images/brand.svg";
import { Link, scroller } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Collapse, Nav, NavbarToggler } from "reactstrap";

export default function Header() {
  const scrollTo = (offset, index) => {
    scroller.scrollTo(index, {
      duration: 200,
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
            variant="text2"
            sx={[
              { borderRadius: "6px" },
              { textTransform: "capitalize" },
              { my: 1, mr: 3, ml:2.5 },
              { bgcolor: "primary.main" },
              { color: "primary.contrastText" },
              { typography: "text2" },
              {fontWeight: "bold" },
              {
                "&:hover": {
                  color: "primary.contrastText",
                  bgcolor: "primary.main",
                  boxShadow: 2,
                },
              },
            ]}
            onClick={() => scrollTo( -50,"Contact")}
          >
            <Link
              to={element.label}
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => setIsOpen(false)}
            >
              {element.label}
            </Link>
          </Button>
        );
      } else {
        return (
          <MuiLink
            key={index}
            variant="text2"
            sx={{
              mx: 2.5,
              my: { xs: 0, md: 1.5 },
              "&:hover": {
                color: "primary.main",
              },
              fontWeight: "bold"
            }}
            component="button"
            underline="hover"
            fontWeight="normal"
            color={element.textColour}
            noWrap
          >
            <Link
              to={element.label}
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => setIsOpen(false)}
            >
              {element.label}
            </Link>
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
            <Button variant="text" sx={{ml:3}}>
              <img src={BrandLogo} className="align-top" alt="eqaim" />
            </Button>
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
