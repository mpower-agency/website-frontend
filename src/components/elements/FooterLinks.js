import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import HeadersData from "../../data/HeadersData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-scroll";

const FooterLinks = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 350, px: 5, margin: "auto" }}>
        <Typography
          variant="h3"
          align="left"
          component="h4"
          gutterBottom
          color="white"
        >
          Links
        </Typography>
        {HeadersData.map(({ label }, index) => {
          return (
            <List key={index}>
              <ListItem disablePadding>
                <MuiLink
                  variant="navbar"
                  sx={[
                    {
                      fontWeight: "medium",
                      color: "white",
                    },
                  ]}
                  component="button"
                  underline="hover"
                  key={label}
                >
                  <Link to={label} smooth={true} offset={-50} duration={500}>
                    {label}
                  </Link>
                </MuiLink>
              </ListItem>
            </List>
          );
        })}
      </Box>
    </ThemeProvider>
  );
};
export default FooterLinks;
