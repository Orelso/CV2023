import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styled from "styled-components";

export function GridCardItem({
  githubLink,
  iframeLink,
  title,
  customCss = "",
}) {
  return (
    <StyledDiv customCss={customCss}>
      <Card
        sx={{
          maxWidth: 421,
        }}
      >
        <a href={iframeLink} target="_blank" rel="noreferrer">
          <iframe
            title={title}
            height="280"
            width="425"
            src={iframeLink}
            frameBorder="0"
          />
        </a>
        <CardContent
          sx={{
            backgroundColor: "rgb(165,170,147)",
            marginTop: "-7px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              textAlign: "center",
            }}
          >
            <a
              href={iframeLink}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#F3D0B5",
                display: "inline-block",
              }}
              className="link-hover"
            >
              {title}
            </a>
          </Typography>
          <Divider />
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "rgb(165,170,147)",
          }}
        >
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#F0E5D3",
              fontFamily: "Orbitron",
            }}
            className="code-hover"
          >
            Code
          </a>
        </CardActions>
      </Card>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  ${(props) => props.customCss ?? ""}
`;
