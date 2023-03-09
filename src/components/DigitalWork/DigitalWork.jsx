import { useState } from "react";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  useTheme,
  Button,
  Modal,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "YoutubeClone",
    url: "https://orelso-youtubeclone.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--YoutubeClone",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672139354/Cv%202023/Screenshot_2022-12-27_at_13.02.39_rluvpw.png",
  },
  {
    title: "Phonebook",
    url: "https://cold-shape-4753.fly.dev",
    codeUrl: "https://github.com/Orelso/Project--Phonebook",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678372617/Cv%202023/Screenshot_2023-03-09_at_16.36.36_vqdrwt.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  },
];

const ProjectCards = () => {
  const theme = useTheme();
  const [selectedImgSrc, setSelectedImgSrc] = useState(null);

  const handleOpen = (imgSrc) => {
    setSelectedImgSrc(imgSrc);
  };

  const handleClose = () => {
    setSelectedImgSrc(null);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ padding: theme.spacing(2) }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={project.title}>
            <Card sx={{ maxWidth: 421 }}>
              <img
                title={project.title}
                height="280"
                width="425"
                src={project.imgSrc}
                frameBorder="0"
                allowFullScreen
                alt={project.title}
                onClick={() => handleOpen(project.imgSrc)}
              />
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
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#F3D0B5",
                      display: "inline-block",
                    }}
                    className="link-hover"
                  >
                    {project.title}
                  </a>
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ backgroundColor: "rgb(165,170,147)" }}>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#F0E5D3",
                    fontFamily: "Urbanist",
                  }}
                  className="code-hover"
                >
                  Code
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="right" paddingTop={2} paddingBottom={2}>
        <Grid item>
          <Button
            sx={{
              color: "#412F25",
              backgroundColor: "#DCC9B6",
              fontSize: "1rem",
              marginRight: 6.9,
              fontFamily: "Urbanist",
              "&:hover": {
                backgroundColor: "#E8E1D8",
                boxShadow: "none",
              },
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
    </>
  );
};

export default ProjectCards;
