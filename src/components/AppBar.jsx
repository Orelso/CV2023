import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { navItems } from "./navItems";
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const theme = createTheme({
  palette: {
    primary: {
      main: "#DCC9B6",
    },
  },
});
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const drawerWidth = 240;
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", height: 200 }}>
      <List>
        {navItems.map(({ title, elementId }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              onClick={() => {
                setMobileOpen(false);
                document
                  .querySelector(`#${elementId}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  const container =
    window !== undefined ? () => window().document.body : undefined;
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", mb: -8.5 }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {/* Orelso Vitam */}
              {/* <ImageAvatars /> */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map(({ title, elementId }) => (
                <Button
                  key={title}
                  onClick={() => {
                    document
                      .querySelector(`#${elementId}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    color: "#6A6A6A",
                    fontFamily: "Urbanist",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  {title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#9A9684",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
