import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import IconButton from "@mui/material/IconButton";
import testimonialData from "../../data/TestimonialData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Grid, Box } from "@mui/material";

const TestimonialSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  return (
    <Grid container direction="row" alignItems="center" marginY={5}>
      <Grid item xs={1}>
        <IconButton aria-label="previous" onClick={sliderRef?.slickPrev}>
          <IoIosArrowBack />
        </IconButton>
      </Grid>
      <Grid item xs={10}>
        <Box marginLeft={2}>
          <RiDoubleQuotesL size={50} />
        </Box>
        <Slider ref={setSliderRef} {...settings}>
          {testimonialData.map((data, index) => {
            return <TestimonialCard key={index} data={data} />;
          })}
        </Slider>
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="next" onClick={sliderRef?.slickNext}>
          <IoIosArrowForward />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TestimonialSlider;
