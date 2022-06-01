import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import HeadersData from "../../data/HeadersData";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-scroll";
import Grid from "@mui/material/Grid";

const FooterLinks = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 350, px: 5,pt: 2, margin: "auto" }}>
        <Typography
          variant="text2"
          align="left"
          component="h4"
          gutterBottom
          color={theme.palette.footer.contrastText}
          sx={{fontWeight:"bold"}}
        >
          Links
        </Typography>
        {HeadersData.map(({ label }, index) => {
          return (
            <Grid item key={index}>
             
                <MuiLink
                  variant="sub"
                  sx={[
                    {
                      fontWeight: "medium",
                      color: theme.palette.footer.contrastText,
                    },
                  ]}
                  component="button"
                  underline="hover"
                  key={label}
                >
                  <Link to={label} smooth={true} offset={-50} duration={200}>
                    {label}
                  </Link>
                </MuiLink>
              
            </Grid>
          );
        })}
      </Box>
    </ThemeProvider>
  );
};
export default FooterLinks;
