import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { BsLinkedin } from "react-icons/bs";

const AboutUsCard = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item>
        <Card
          sx={{
            width: 320,
            boxShadow: 2,
            borderRadius: "3%",
            "&:hover": {
              boxShadow: 6,
            },
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "50%",
              px: 11,
              pt: 3,
              pb: 2,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            component="img"
            image={props.image}
            height="180"
            alt="CardImage"
          />
          <CardContent
            sx={{
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="text2"
                color="primary.main"
                component="div"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                {props.name}
              </Typography>

              <Typography
                gutterBottom
                variant="sub"
                color="text.secondary"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                {props.subtitle}
              </Typography>
            </Box>
            <Box sx={{ width: "100%", mt: 2 }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  rel="noopener noreferrer"
                  href={props.linkedinurl}
                  target="_blank"
                >
                  <BsLinkedin size="2em" fill="rgb(0, 119, 181)" />
                </a>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default AboutUsCard;
