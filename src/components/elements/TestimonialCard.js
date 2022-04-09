import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TestimonialCard = (props) => {
  const data = props.data;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        padding: 3,
        marginX: 5,
        marginBottom: 1,
        boxShadow: 5,
        bgcolor: "secondary.main",
        borderRadius: 10,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 120,
          height: 120,
          msTextOverflow: { xs: 5, lg: 0 },
          marginLeft: { md: 3 },
        }}
        image={data.image}
        alt="logo"
      />
      <CardContent
        sx={{
          marginY: { xs: 0.5 },
          marginLeft: { xs: 1, lg: 5 },
          padding: { xs: 1, sm: 3, md: 5 },
          height: { xs: 120, sm: 150, lg: 180 },
        }}
      >
        <Typography component="h3" variant="h3" marginBottom={1}>
          {data.testimonial}
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          component="h6"
          align="left"
        >
          - {data.client}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
