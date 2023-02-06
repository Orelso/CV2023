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
              href='https://orelso-country.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-country.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Country Filter
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project-Country_Filter'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Youtube Clone
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Youtube Clone
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Youtube Clone
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Youtube Clone
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Youtube Clone
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Youtube Clone
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
              <CardMedia
                component='img'
                alt='youtubeclone'
                height='250'
                image='https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png'
              />
            </a>
            <CardContent sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <Typography gutterBottom variant='h5' component='div'>
                <a
                  href='https://orelso-youtubeclone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none", color: "#F3D0B5" }}
                >
                  Youtube Clone
                </a>
              </Typography>
              {/* <Typography variant='body2' color='text.secondary'>
               MUI-API-REACT
              </Typography> */}
            </CardContent>
            <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
              <a
                href='https://github.com/Orelso/Project--YoutubeClone'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "#F0E5D3" }}
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
