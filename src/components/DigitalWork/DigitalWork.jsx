import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { textAlign } from "@mui/system";
import Divider from "@mui/material/Divider";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import GitHubIcon from "@mui/icons-material/GitHub";
import { css } from "styled-components";
import { GridCardItem } from "./GridCardItem";

const MY_DIGITAL_WORKS = [
  {
    title: "Youtube Clone",
    iframeLink: "https://orelso-youtubeclone.netlify.app",
    githubLink: "https://github.com/Orelso/Project--YoutubeClone",
    customCss: css``,
  },
  //  TODO clean up into array

  {
    title: "Youtube Clone",
    iframeLink: "https://orelso-youtubeclone.netlify.app",
    githubLink: "https://github.com/Orelso/Project--YoutubeClone",
    customCss: css``,
  },
];

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
export default function ResponsiveGrid() {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "#F0E5D3" }}>
        <Grid
          container
          spacing={6}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: -35 }}
        >
          {/* ----------------------------------------------------------------------------------------------------------------------(Youtube Clone)---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {MY_DIGITAL_WORKS.map(
            ({ title, iframeLink, githubLink, customCss }) => (
              <Grid key={title} item xs={12} sm={6} md={6} lg={3}>
                <GridCardItem
                  title={title}
                  iframeLink={iframeLink}
                  githubLink={githubLink}
                  customCss={customCss}
                />
              </Grid>
            )
          )}

          {/* ------------------------------------------------------------------------------------------------------------------------(Phonebook)-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ maxWidth: 421 }}>
              <a
                href="https://cold-shape-4753.fly.dev"
                target="_blank"
                rel="noreferrer"
              >
                <iframe
                  title="youtubeclone"
                  height="280"
                  width="425"
                  src="https://cold-shape-4753.fly.dev"
                  frameBorder="0"
                  allowFullScreen
                />
              </a>
              <CardContent
                sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://cold-shape-4753.fly.dev"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    Phonebook
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href="https://github.com/Orelso/Project--Phonebook"
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
          </Grid>
          {/* -------------------------------------------------------------------------------------------------------------------------(Country Filter)------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ maxWidth: 421 }}>
              <a
                href="https://orelso-country.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <iframe
                  title="youtubeclone"
                  height="280"
                  width="425"
                  src="https://orelso-country.netlify.app"
                  frameBorder="0"
                />
              </a>
              <CardContent
                sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://orelso-country.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    Country Filter
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href="https://github.com/Orelso/Project--CountryFilter"
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
          </Grid>
          {/* -------------------------------------------------------------------------------------------------------------------------(USA Filter State)------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ maxWidth: 421 }}>
              <a
                href="https://usafilter.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <iframe
                  title="youtubeclone"
                  height="280"
                  width="425"
                  src="https://usafilter.netlify.app"
                  frameBorder="0"
                />
              </a>
              <CardContent
                sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://usafilter.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    USA State Filter
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href="https://github.com/Orelso/Project--USA-State-Filter-API"
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
          </Grid>
          {/* -----------------------------------------------------------------------------------------------------------------------------(Best NFL Players)--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ maxWidth: 421 }}>
              <a
                href="https://nflplayers.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <iframe
                  title="youtubeclone"
                  height="280"
                  width="425"
                  src="https://nflplayers.netlify.app"
                  frameBorder="0"
                />
              </a>
              <CardContent
                sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://nflplayers.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    Best NFL Players
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href="https://github.com/Orelso/Project--Best-NFL-Players"
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
          </Grid>
          {/* -----------------------------------------------------------------------------------------------------------------------------------(Drawing Pad)--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ maxWidth: 421 }}>
              <a
                href="https://canvasdrawingpad.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <iframe
                  title="youtubeclone"
                  height="280"
                  width="425"
                  src="https://canvasdrawingpad.netlify.app"
                  frameBorder="0"
                />
              </a>
              <CardContent
                sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://canvasdrawingpad.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    Drawing Pad
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href="https://github.com/Orelso/Project--Drawing-Pad"
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
          </Grid>
          {/* -----------------------------------------------------------------------------------------------------------------------(Pokemon Jump)--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ maxWidth: 421 }}>
              <a
                href="https://pokemonjump.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                TODO
                {/* <iframe
                  title='youtubeclone'
                  height='280'
                  width='425'
                  src='https://pokemonjump.netlify.app'
                  frameBorder='0' /> */}
              </a>
              <CardContent
                sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://pokemonjump.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    Pokemon Jump
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href="https://github.com/Orelso/Project--PokemonJump"
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
          </Grid>
          {/* ----------------------------------------------------------------------------------------------------------(Guess The Animal)---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ maxWidth: 421 }}>
              <a
                href="https://orelso-guesstheanimal.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <iframe
                  title="youtubeclone"
                  height="280"
                  width="425"
                  src="https://orelso-guesstheanimal.netlify.app"
                  frameBorder="0"
                />
              </a>
              <CardContent
                sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://orelso-guesstheanimal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    Guess the Animal
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href="https://github.com/Orelso/Project--GuessTheAnimal"
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
          </Grid>
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        </Grid>
        <Grid
          container
          justifyContent="center"
          paddingTop={2}
          paddingBottom={2}
        >
          <Grid item>
            <Button
              sx={{
                color: "#171515",
                fontSize: "1.5rem",
                marginRight: 2,
                fontFamily: "Orbitron",
              }}
              href="https://github.com/Orelso"
              target="_blank"
              startIcon={<GitHubIcon />}
              variant="contained"
            >
              More Digital work
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
