import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CvReferences() {
  const [showPreview, setShowPreview] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleDownload = (imageSrc) => {
    const link = document.createElement('a');
    link.download = `${imageSrc}.png`;
    link.href = imageSrc;
    link.click();
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setSelectedImage('');
    setShowPreview(false);
  };

  const handleShowImages = () => {
    setShowImages(!showImages);
  }

  return (
    <div style={{backgroundColor: 'rgb(165,170,147)'}}>
      {showPreview && 
        <Dialog open={showPreview} onClose={handleClosePreview}>
          <DialogTitle sx={{ textAlign: 'center', backgroundColor: 'blue' }}>Preview</DialogTitle>
          <DialogContent>
            <img class="cv" src={selectedImage} alt="Preview" width="540" height="788" />
          </DialogContent>
          <Button variant="contained" onClick={handleClosePreview}>
            Close
          </Button>
        </Dialog>
      }
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
        <Button style={{ textAlign: 'center',  }} variant="contained" onClick={handleShowImages}>
          {showImages ? "Hide" : "Show Cv/References"}
        </Button>
      </div>
      {showImages &&
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
            <img src="resume.png" alt="Download" height="350" width="280" style={{marginTop: 10, marginBottom: 10, cursor: 'pointer' }} onClick={() => handleImageClick("resume.png")} />
            <Button style={{marginBottom: 10, }} variant="contained" onClick={() => handleDownload("resume.png")}>
              Download
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
            <img src="RecOli.png" alt="Download" height="350" width="280" style={{marginTop: 10, marginBottom: 10, cursor: 'pointer' }} onClick={() => handleImageClick("RecOli.png")} />
            <Button style={{marginBottom: 10, }} variant="contained" onClick={() => handleDownload("RecOli.png")}>
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
      }
    </div>
  );
}
