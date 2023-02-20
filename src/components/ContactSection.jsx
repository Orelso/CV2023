import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ViewInArIcon from '@mui/icons-material/ViewInAr';


function Contact() {
  return (
    <section id="contact">
      <div>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Lets make some memorable work together...
        </Typography>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        <Button
          sx={{ color: '#171515', fontSize: '2rem' }}
          href="https://github.com/Orelso"
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
        <Button
          sx={{ color: '#ffffff', fontSize: '2rem' }}
          href="https://codepen.io/Orelso"
          target="_blank"
          startIcon={<ViewInArIcon />}
        >
          Codepen
        </Button>
        <Button
          sx={{ fontSize: '2rem' }}
          href="mailto:orelso25@gmail.com"
          startIcon={<EmailIcon />}
        >
          Mail
        </Button>
        <Button
          sx={{ color: 'grey', fontSize: '2rem' }}
          href="tel:+358451243334"
          startIcon={<PhoneIphoneIcon />}
        >
          Call
        </Button>
        <Button
          sx={{ color: 'green', fontSize: '2rem' }}
          href="https://api.whatsapp.com/send?phone=+358451243334&text=Hello,"
          target="_blank"
          startIcon={<WhatsAppIcon />}
        >
          Whatsapp
        </Button>
        <Button
          sx={{ color: ' #00acee', fontSize: '2rem' }}
          href="https://twitter.com/orelsovitam"
          target="_blank"
          startIcon={<TwitterIcon />}
        >
          Twitter
        </Button>
        <Button
          sx={{ color: '#C13584', fontSize: '2rem' }}
          href="https://www.instagram.com/orelso/?hl=en"
          target="_blank"
          startIcon={<InstagramIcon />}
        >
          Instagram
        </Button>
      </Box>
      <Typography sx={{fontSize: '12px', marginTop: '20px'}}>
        Original Content ©2022 Orelso Vitam 
      </Typography>

    </section>
  );
}

export default Contact;
