import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import Stack from '@mui/material/Stack';
import SocialMediaData from "../../data/SocialMediaData"

const FooterIcons = () => {

    return (
        <Stack direction="row" spacing={2} alignItems="center" sx={{ m: 1 }}>

            <a
                rel="noopener noreferrer"
                href={SocialMediaData.linkedin.url}
                target="_blank"
            >
                <BsLinkedin size="1.5em" fill="rgb(255,255,255)" />
            </a>
            <a
                rel="noopener noreferrer"
                href={SocialMediaData.instagram.url}
                target="_blank"
            >
                <BsInstagram size="1.5em" fill="rgb(255,255,255)" />

            </a>

            {/* <a
                  rel="noopener noreferrer"
                  href={SocialMediaData.facebook.url}
                  target="_blank"
                >
              <BsFacebook size="1.5em" fill="rgb(255,255,255)"/>          
              </a> */}
        </Stack>
    )
}
export default FooterIcons;