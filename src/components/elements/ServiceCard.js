import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

import ServiceGradImg from "../../assets/images/Lush.jpg";

const ServiceCard = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item>
        <Card
          sx={{
            width: 320,
            boxShadow: 2,
            "&:hover": {
              boxShadow: 6,
            },
          }}
        >
          <div style={{ position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: 180 }}
              component="img"
              image={ServiceGradImg}
              alt="CardImage"
            />

            <div
              style={{
                position: "absolute",
                color: "white",
                bottom: 10,
                left: "10%",
              }}
            >
              <Typography
                component="h3"
                variant="h2"
                align="left"
                sx={{ fontWeight: "bold", px: 1 }}
              >
                {props.title}
              </Typography>
            </div>

            <img
              style={{
                width: "30%",
                position: "absolute",
                color: "white",
                top: 20,
                right: "15%",
                transform: "translateX(20%)",
              }}
              src={props.image}
              alt="ServiceIcon"
            />
          </div>

          <CardContent
            sx={{
              backgroundColor: "white",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item sx={{ pb: 2 }}>
                <Typography component="h5" variant="text2" align="center" >
                  {props.description}
                </Typography>
              </Grid>
              <Grid item>
                {props.skills.map((skill, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: 28,
                      mx: 0.8,
                      my: 0.5,
                      px: 1.5,
                      boxShadow: 0,
                      bgcolor: theme.palette.primary.main,
                      "&:hover": {
                        color: "primary.contrastText",
                        bgcolor: "primary.main",
                        boxShadow: 0,
                      },
                    }}
                  >
                    {skill}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};
export default ServiceCard;
