import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CvReferences() {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'resume.png';
    link.href = 'resume.png';
    link.click();
  };

  const handleImageClick = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <div style={{backgroundColor: 'rgb(165,170,147)'}}>
      <Dialog open={showPreview} onClose={handleClosePreview}>
        <DialogTitle sx={{ textAlign: 'center', backgroundColor: 'blue' }}>Preview</DialogTitle>
        <DialogContent>
          <img class="cv" src="resume.png" alt="javaTpoint" width="540" height="788" />
        </DialogContent>
        <Button variant="contained" onClick={handleClosePreview}>
          Close
        </Button>
      </Dialog>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
          <img src="resume.png" alt="Download" height="350" width="280" style={{marginTop: 10, marginBottom: 10, cursor: 'pointer' }} onClick={handleImageClick} />
          <Button style={{marginBottom: 10, }} variant="contained" onClick={handleDownload}>
            Download
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
          <img src="resume.png" alt="Download" height="350" width="280" style={{marginTop: 10, marginBottom: 10, cursor: 'pointer' }} onClick={handleImageClick} />
          <Button style={{marginBottom: 10, }} variant="contained" onClick={handleDownload}>
            Download
          </Button>
        </div>
        
      </div>
    </div>
  );
}
