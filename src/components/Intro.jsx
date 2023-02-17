import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Intro() {
  return (
    <Box>
      <Paper sx={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '800px', backgroundColor: 'rgb(165,170,147)' }}>
        <section style={{ fontSize: '4rem', fontWeight: '200', fontStyle: 'italic', color: '#F0E5D3', textAlign: 'center' }}>
          <h1 className='intro-style'>Hello I am <a id="namestyle" href="https://www.linkedin.com/in/orelso-vitam-56879791">Orelso</a></h1>
          <p className='intro-style' style={{ marginTop: '1rem' }}>a web developer</p>
        </section>

        <seciton>
    <img src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" alt="Girl in a jacket" width="50" height="60"/>
    <img src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" alt="Girl in a jacket" width="50" height="60"/>
    <img src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png" alt="Girl in a jacket" width="50" height="60"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Girl in a jacket" width="70" height="60"/>
    <img src="https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png" alt="Girl in a jacket" width="70" height="60"/>
    <img src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png" alt="Girl in a jacket" width="70" height="60"/>
    <img src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png" alt="Girl in a jacket" width="70" height="60"/>
    <img src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png" alt="Girl in a jacket" width="70" height="60"/>
      </seciton>
      </Paper>
     
    </Box>
    
  )
}



export default Intro