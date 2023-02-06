import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Intro() {
  return (
    <Box>
      <Paper sx={{display: 'flex', flexDirection: 'column', width: '100vw', height: '800px', backgroundColor: 'rgb(165,170,147)'}}>
        <section style={{fontSize: '4rem', fontWeight: '200', fontStyle: 'italic', color: '#F0E5D3', textAlign: 'center'}}>
          <h1 className='intro-style' >Hello I am <a id="namestyle" href="https://www.linkedin.com/in/orelso-vitam-56879791">Orelso</a></h1>
          <p className='intro-style' style={{marginTop: '1rem'}}>a web developer</p>
        </section>
      </Paper>
    </Box>
  )
}



export default Intro