import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DownloadIcon from "@mui/icons-material/Download";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginRight: 4,
};

const imageStyle = {
  marginTop: 10,
  marginBottom: 10,
  cursor: "pointer",
};

const buttonStyle = {
  marginBottom: 10,
  backgroundColor: "#DCC9B6",
  color: "#412F25",
};

export default function CvReferences() {
  const [showPreview, setShowPreview] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleDownload = (imageSrc) => {
    const link = document.createElement("a");
    link.download = `${imageSrc}.png`;
    link.href = imageSrc;
    link.click();
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setSelectedImage("");
    setShowPreview(false);
  };

  const handleShowImages = () => {
    setShowImages(!showImages);
  };

  return (
    <div style={{ backgroundColor: "#9A9684", overflowX: "auto" }}>
      {showPreview && (
        <Dialog open={showPreview} onClose={handleClosePreview}>
          <DialogTitle sx={{ textAlign: "center", backgroundColor: "#DCC9B6" }}>
            Preview
          </DialogTitle>
          <DialogContent>
            <img
              class="cv"
              src={selectedImage}
              alt="Preview"
              width="540"
              height="788"
            />
          </DialogContent>
          <Button
            variant="contained"
            onClick={handleClosePreview}
            sx={{ backgroundColor: "#9A9684" }}
          >
            Close
          </Button>
        </Dialog>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Button
          style={{ textAlign: "center" }}
          variant="contained"
          onClick={handleShowImages}
          sx={{
            backgroundColor: "#DCC9B6",
            color: "#412F25",
            fontSize: "2rem",
            fontWeight: 300,
            "&:hover": {
              backgroundColor: "#E8E1D8",
              boxShadow: "none",
            },
          }}
        >
          {showImages ? "Hide" : "Show Cv/References"}
        </Button>
      </div>
      {showImages && (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div style={cardStyle}>
              <img
                src="orelsoresume.png"
                alt="Download"
                height="350"
                width="280"
                style={imageStyle}
                onClick={() => handleImageClick("orelsoresume.png")}
              />
              <Button
                startIcon={<DownloadIcon />}
                style={buttonStyle}
                variant="contained"
                onClick={() => handleDownload("orelsoresume.png")}
              >
                Cv/Resume
              </Button>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div style={cardStyle}>
              <img
                src="CoverLetter.png"
                alt="Download"
                height="350"
                width="280"
                style={imageStyle}
                onClick={() => handleImageClick("CoverLetter.png")}
              />
              <Button
                startIcon={<DownloadIcon />}
                style={buttonStyle}
                variant="contained"
                onClick={() => handleDownload("CoverLetter.png")}
              >
                Cover Letter
              </Button>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div style={cardStyle}>
              <img
                src="RecOli.png"
                alt="Download"
                height="350"
                width="280"
                style={imageStyle}
                onClick={() => handleImageClick("RecOli.png")}
              />
              <Button
                startIcon={<DownloadIcon />}
                style={buttonStyle}
                variant="contained"
                onClick={() => handleDownload("RecOli.png")}
              >
                Recommendation Letter
              </Button>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div style={cardStyle}>
              <img
                src="RecRessu.png"
                alt="Download"
                height="350"
                width="280"
                style={imageStyle}
                onClick={() => handleImageClick("RecRessu.png")}
              />
              <Button
                startIcon={<DownloadIcon />}
                style={buttonStyle}
                variant="contained"
                onClick={() => handleDownload("RecRessu.png")}
              >
                Recommendation Letter
              </Button>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            <div style={cardStyle}>
              <img
                src="RecChi.png"
                alt="Download"
                height="350"
                width="280"
                style={imageStyle}
                onClick={() => handleImageClick("RecChi.png")}
              />
              <Button
                startIcon={<DownloadIcon />}
                style={buttonStyle}
                variant="contained"
                onClick={() => handleDownload("RecChi.png")}
              >
                Recommendation Letter
              </Button>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            <div style={cardStyle}>
              <img
                src="RecYc.png"
                alt="Download"
                height="350"
                width="280"
                style={imageStyle}
                onClick={() => handleImageClick("RecYc.png")}
              />
              <Button
                startIcon={<DownloadIcon />}
                style={buttonStyle}
                variant="contained"
                onClick={() => handleDownload("RecYc.png")}
              >
                Recommendation Letter
              </Button>
            </div>

            <div style={cardStyle}>
              <img
                src="RecCri.png"
                alt="Download"
                height="350"
                width="280"
                style={imageStyle}
                onClick={() => handleImageClick("RecCri.png")}
              />
              <Button
                startIcon={<DownloadIcon />}
                style={buttonStyle}
                variant="contained"
                onClick={() => handleDownload("RecCri.png")}
              >
                Recommendation Letter
              </Button>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          </div>
        </>
      )}
    </div>
  );
}
