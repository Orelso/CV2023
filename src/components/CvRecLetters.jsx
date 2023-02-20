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

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <div>
      {showPreview ? (
        <Dialog open={showPreview} onClose={handleClosePreview}>
          <DialogTitle sx={{ textAlign: 'center', backgroundColor: 'blue' }}>Preview</DialogTitle>
          <DialogContent>
            <img class="cv" src="resume.png" alt="javaTpoint" width="540" height="788" />
          </DialogContent>
          <Button variant="contained" onClick={handleClosePreview}>
            Close
          </Button>
        </Dialog>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="resume.png" alt="Download" height="200" width="200" style={{ marginBottom: '10px' }} />
          <Button variant="contained" onClick={handleDownload}>
            Download
          </Button>
          <Button variant="contained" onClick={handlePreview} style={{ marginTop: '10px' }}>
            Preview
          </Button>
        </div>
      )}
    </div>
  );
}
