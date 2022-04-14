import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TestimonialCard = (props) => {
  const data = props.data;
  return (
    <Card
      variant
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        padding: 3,
        marginX: 1,
        marginBottom: 1,
        borderRadius: 10,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: 80, sm: 100, lg: 120 },
          height: { xs: 80, sm: 100, lg: 120 },
          msTextOverflow: { xs: 5, lg: 0 },
          marginLeft: { md: 3 },
        }}
        image={data.image}
        alt="logo"
      />
      <CardContent
        sx={{
          marginY: { xs: 1 },
          marginLeft: { xs: 1, lg: 5 },
          padding: { xs: 0, sm: 3, md: 5 },
          minWidth: { xs: 220 },
          minHeight: { xs: 120, sm: 150, lg: 180 },
        }}
      >
        <Typography
          component="h3"
          variant="text2"
          sx={{ fontWeight: "medium" }}
          marginBottom={1}
        >
          {data.testimonial}
        </Typography>
        <Typography
          variant="text2"
          color="text.secondary"
          component="h6"
          align="left"
          sx={{ fontWeight: "bold" }}
        >
          - {data.client}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
