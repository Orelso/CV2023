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
    title: "NFL ChatGPT Bot",
    // url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--NFL-AI-Bot",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678449170/Cv%202023/Screenshot_2023-03-10_at_13.51.38_cdjm5e.png",
  },
  {
    title: "USA City Filter",
    url: "https://usafilter.netlify.app/",
    codeUrl: "https://github.com/Orelso/Project--USA-State-Filter-API",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678443209/Cv%202023/Screenshot_2023-03-10_at_12.13.02_kojd3d.png",
  },
  {
    title: "Todo list",
    url: "https://orelso-todolist.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--TodoList-TS",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678444313/Cv%202023/Screenshot_2023-03-10_at_12.31.38_qjsxcj.png",
  },
  {
    title: "Guess the Animal",
    url: "https://orelso-guesstheanimal.netlify.app/",
    codeUrl: "https://github.com/Orelso/Project--GuessTheAnimal",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678444843/Cv%202023/Screenshot_2023-03-10_at_12.40.32_ydypbe.png",
  },
  {
    title: "Guess the Number",
    url: "https://orelso-guessthenumber.netlify.app/",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678444584/Cv%202023/Screenshot_2023-03-10_at_12.36.13_sjfwcc.png",
  },
  {
    title: "Pokemon Generator",
    url: "https://orelso-pokemongenerator.netlify.app/",
    codeUrl: "https://github.com/Orelso/Project--React-MUI-album",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678445251/Cv%202023/Screenshot_2023-03-10_at_12.47.20_wrhehw.png",
  },
  {
    title: "Cinematic Adventure",
    // url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CinematicAdventure",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678445508/Cv%202023/Screenshot_2023-03-10_at_12.51.30_r4i9aw.png",
  },
  {
    title: "Blog",
    // url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Blog",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678445772/Cv%202023/Screenshot_2023-03-10_at_12.56.01_k1m7vp.png",
  },
  {
    title: "Pokemon Jump",
    url: "https://pokemonjump.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--PokemonJump",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678446092/Cv%202023/Screenshot_2023-03-10_at_13.00.56_kqzvbw.png",
  },
  {
    title: "Drawing Pad",
    url: "https://canvasdrawingpad.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Drawing-Pad",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678446269/Cv%202023/Screenshot_2023-03-10_at_13.04.19_srpivg.png",
  },
  {
    title: "Best NFL Players",
    url: "https://bestnflplayers.netlify.app/",
    codeUrl: "https://github.com/Orelso/Project--Best-NFL-Players",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678446446/Cv%202023/Screenshot_2023-03-10_at_13.07.12_uyhcel.png",
  },
  {
    title: "Drumset",
    url: "https://orelso-drumset.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Drums",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678446629/Cv%202023/Screenshot_2023-03-10_at_13.10.10_u4vqnu.png",
  },
  {
    title: "Tic-Tac-Toe",
    url: "https://orelso-tictactoe.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--TicTacToe",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678446742/Cv%202023/Screenshot_2023-03-10_at_13.12.14_uhaixr.png",
  },
  {
    title: "Calculator",
    url: "https://orelso-calculator.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Calculator2",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678446922/Cv%202023/Screenshot_2023-03-10_at_13.15.12_kw9yog.png",
  },
  {
    title: "Clock",
    url: "https://orelso-clock.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Clock",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678447044/Cv%202023/Screenshot_2023-03-10_at_13.17.14_tmbab7.png",
  },
  {
    title: "Pokedex",
    url: "https://orelso-pokedex.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Pokedex",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678447182/Cv%202023/Screenshot_2023-03-10_at_13.19.33_r2pbxu.png",
  },
  {
    title: "Magic 8 Ball",
    url: "https://orelso-magiceightball.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Magic8Ball",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678447413/Cv%202023/Screenshot_2023-03-10_at_13.23.23_vcao12.png",
  },
  {
    title: "Word generator",
    url: "https://orelso-wordgenerator.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--TextGenerator",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678448145/Cv%202023/Screenshot_2023-03-10_at_13.34.53_rjt8rg.png",
  },
  {
    title: "Picture Editor",
    url: "https://orelso-pictureeditor.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--PictureEditor",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678448312/Cv%202023/Screenshot_2023-03-10_at_13.38.21_xmphvq.png",
  },
  {
    title: "Rock Paper Scissor",
    url: "https://orelso-rockpaper.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--RockPaperScissor",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678448436/Cv%202023/Screenshot_2023-03-10_at_13.40.27_ji4ojd.png",
  },
  {
    title: "Digital Clock",
    url: "https://orelso-digitalclock.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Digital-Clock",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678448564/Cv%202023/Screenshot_2023-03-10_at_13.42.34_ldbdow.png",
  },
  {
    title: "Calculator",
    url: "https://orelso-calc.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Calculator",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678448698/Cv%202023/Screenshot_2023-03-10_at_13.44.45_p99g8m.png",
  },
  {
    title: "Hang-Man",
    url: "https://orelso-hangman.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--Hangman",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678448830/Cv%202023/Screenshot_2023-03-10_at_13.47.01_mykuj2.png",
  },
  {
    title: "Cuban Food",
    url: "https://orelso-cubanfood.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CubanFood",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678449512/Cv%202023/Screenshot_2023-03-10_at_13.58.22_ke552b.png",
  },
  {
    title: "Cuban Food Survey",
    url: "https://orelso-cubansurvey.netlify.app/",
    codeUrl: "https://github.com/Orelso/Project--CubanSurvey",
    imgSrc:
      "https://res.cloudinary.com/orelso/image/upload/v1678449745/Cv%202023/Screenshot_2023-03-10_at_14.02.14_y6bo0d.png",
  },
  // {
  //   title: "NFL Info",
  //   url: "https://nflinfo.netlify.app/",
  //   codeUrl: "https://github.com/Orelso/Project--NFLinfo",
  //   imgSrc:
  //     "https://res.cloudinary.com/orelso/image/upload/v1678450015/Cv%202023/Screenshot_2023-03-10_at_14.06.44_c2oxxz.png",
  // },
  // {
  //   title: "Country Filter",
  //   url: "https://orelso-country.netlify.app",
  //   codeUrl: "https://github.com/Orelso/Project--CountryFilter",
  //   imgSrc:
  //     "https://res.cloudinary.com/orelso/image/upload/v1672144997/Cv%202023/Screenshot_2022-12-27_at_14.42.56_uqt0nu.png",
  // },
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
