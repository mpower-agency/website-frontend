import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, Box, Typography } from "@mui/material";
import ContactUsField from "./ContactUsField";
import CountrySelect from "./CountrySelect";
const axios = require("axios").default;

const ContactUsForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: `${formData.get("firstName")} ${formData.get("lastName")}`,
      emailId: formData.get("email"),
      country: country,
      message: formData.get("message"),
    };
    console.log(data);
    setDisabled(true);

    try {
      const resp = await axios.post(
        "https://vv25ttgdo8.execute-api.us-east-2.amazonaws.com/contact-us",
        data,
        { headers: { "Content-Type": "application/json", token: "eqaimAuth" } }
      );
      alert(resp.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }

    setDisabled(false);

    setCountry(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const [disabled, setDisabled] = useState(false);

  // State for Fields
  const [country, setCountry] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} paddingX={1}>
          <ContactUsField
            key="firstName"
            id="firstName"
            label="First Name"
            value={firstName}
            setValue={setFirstName}
            required={true}
          />
        </Grid>
        <Grid item xs={12} md={6} paddingX={1}>
          <ContactUsField
            key="lastName"
            id="lastName"
            label="Last Name"
            value={lastName}
            setValue={setLastName}
            required={false}
          />
        </Grid>
        <Grid item xs={12} md={6} paddingX={1}>
          <ContactUsField
            key="email"
            id="email"
            label="Email"
            value={email}
            setValue={setEmail}
            required={true}
          />
        </Grid>
        <Grid item xs={12} md={6} paddingX={1}>
          <CountrySelect
            key="country"
            id="country"
            label="Country"
            value={country}
            setValue={setCountry}
            required={true}
          />
        </Grid>
        <Grid item xs={12} paddingX={1}>
          <ContactUsField
            key="message"
            id="message"
            label="Message"
            multiline={true}
            value={message}
            setValue={setMessage}
            rows={4}
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          size="large"
          disabled={disabled}
          sx={{
            mt: 3,
            mb: 2,
            marginX: { xs: 2, md: 10, lg: 20 },
            bgcolor: "primary.main",
            "&:hover": {
              color: "primary.contrastText",
              bgcolor: "primary.main",
              boxShadow: 2,
            },
          }}
        >
          <Typography
            variant="text3"
            component="h2"
            color="primary.contrastText"
            noWrap
          >
            {disabled ? "Submitting..." : "Submit"}
          </Typography>
        </Button>
      </Grid>
    </Box>
  );
};

export default ContactUsForm;
