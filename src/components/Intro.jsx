import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function Intro() {
  return (
    <Box>
      <Paper sx={{display: 'flex', flexDirection: 'column', width: '100vw', height: '50vh', backgroundColor: 'rgb(165,170,147)'}}>
    <section style={{fontSize: '5rem', fontWeight: '200', fontStyle: 'italic', color: '#F0E5D3'}}>
        <h1 >Hello I am <a id="namestyle" href="https://www.linkedin.com/in/orelso-vitam-56879791">Orelso</a></h1>
        <p>a web developer</p>
    </section>
    </Paper>
    </Box>
  )
}

export default Intro