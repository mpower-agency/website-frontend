import TextField from "@mui/material/TextField";

const ContactUsField = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <TextField
      margin="normal"
      required={props.required}
      fullWidth
      id={props.id}
      label={props.label}
      name={props.id}
      value={props.value}
      onChange={handleChange}
      autoComplete={props.id}
      multiline={props.multiline}
      rows={props.rows}
    />
  );
};

export default ContactUsField;
