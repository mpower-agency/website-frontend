import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";

const NavElement = (props) => {
  return (
    <Link
      to={props.label}
      smooth={true}
      offset={-100}
      duration={500}
      onClick={() => props.setIsOpen(false)}
    >
      <Typography variant={props.variant} color={props.textColour} noWrap>
        {props.label}
      </Typography>
    </Link>
  );
};

export default NavElement;
