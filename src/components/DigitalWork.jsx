import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
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
import Divider from '@mui/material/Divider';


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
    <Box sx={{ flexGrow: 1, backgroundColor: "#F0E5D3" }}>
      <Grid
        marginRight={2}
        container
        spacing={{ xs: 1, md: 8 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: -75 }}
      >
{/* ----------------------------------------------------------------------------------------------------------------------(Youtube Clone)---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://orelso-youtubeclone.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://orelso-youtubeclone.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Youtube Clone
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>

{/* ------------------------------------------------------------------------------------------------------------------------(Phonebook)-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://cold-shape-4753.fly.dev'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://cold-shape-4753.fly.dev'
                frameBorder='0'
                
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://cold-shape-4753.fly.dev'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Phonebook
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--Phonebook'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
{/* -------------------------------------------------------------------------------------------------------------------------(Country Filter)------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://orelso-country.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://orelso-country.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://orelso-country.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Country Filter
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--CountryFilter'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
{/* -------------------------------------------------------------------------------------------------------------------------(USA Filter State)------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://usafilter.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://usafilter.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://usafilter.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  USA State Filter
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--USA-State-Filter-API'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
{/* -----------------------------------------------------------------------------------------------------------------------------(Best NFL Players)--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://nflplayers.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://nflplayers.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://nflplayers.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Best NFL Players
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--Best-NFL-Players'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
{/* -----------------------------------------------------------------------------------------------------------------------------------(Drawing Pad)--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://canvasdrawingpad.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://canvasdrawingpad.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://canvasdrawingpad.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Drawing Pad
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--Drawing-Pad'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://orelso-youtubeclone.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://orelso-youtubeclone.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Youtube Clone
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://orelso-youtubeclone.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://orelso-youtubeclone.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Youtube Clone
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<Grid xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ maxWidth: 421 }}>
            <a
              href='https://orelso-youtubeclone.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <iframe
                title='youtubeclone'
                height='280'
                width='425'
                src='https://orelso-youtubeclone.netlify.app'
                frameBorder='0'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)", marginTop: "-7px" }}>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5", display: "inline-block" }}
                  className="link-hover"
                >
                  Youtube Clone
                </a>
              </Typography>
              <Divider />

            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)"}}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3",}}
                className="code-hover"
              >
                Code
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
