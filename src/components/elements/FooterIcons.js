import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import Stack from '@mui/material/Stack';
const FooterIcons= ()=> {

    return (
        <Stack direction="row" spacing={2} alignItems="center" sx={{m:1}}>    

           
              <BsLinkedin size="1.5em" fill="rgb(255,255,255)"/>          
          
           
              <BsInstagram size="1.5em" fill="rgb(255,255,255)"/>          
          
            
              <BsFacebook size="1.5em" fill="rgb(255,255,255)"/>          
          
        </Stack>
    )
}
export default FooterIcons;