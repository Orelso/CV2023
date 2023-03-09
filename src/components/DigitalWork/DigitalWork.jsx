import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  useTheme,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Phonebook",
    url: "https://cold-shape-4753.fly.dev",
    codeUrl: "https://github.com/Orelso/Project--Phonebook",
    iframeSrc: "https://cold-shape-4753.fly.dev",
  },
  {
    title: "Country Filter",
    url: "https://orelso-country.netlify.app",
    codeUrl: "https://github.com/Orelso/Project--CountryFilter",
    iframeSrc: "https://orelso-country.netlify.app",
  },
];

const ProjectCards = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2} sx={{ padding: theme.spacing(2) }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={project.title}>
            <Card sx={{ maxWidth: 421 }}>
              <a href={project.url} target="_blank" rel="noreferrer">
                <iframe
                  title={project.title}
                  height="280"
                  width="425"
                  src={project.iframeSrc}
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
              marginRight: 2,
              fontFamily: "Urbanist",
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

{
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
}
