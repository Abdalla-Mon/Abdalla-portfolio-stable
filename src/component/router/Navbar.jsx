import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";

import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["home", "portfolio", "about", "contact"];

export default function Navbar() {
  return <DrawerAppBar />;
}
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [scrolled, setScrolled] = React.useState(false);
  // const { scrollY } = useScroll(false);
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest > 300) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // });
  const drawer = (
    <Box
      className="drawer-handle"
      // onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <div className="flex drawer-header justify-between items-center">
        <div className="navbar-logo mb-navbar-logo flex items-center">
          <div className="img-container mr-2">
            <img src="./landing-imgs/face-port-1.png" />
          </div>{" "}
        </div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className="close-btn"
        >
          <Close />
        </IconButton>
      </div>
      <Divider />

      <ul className="flex flex-col gap-2 navbar-ul drawer-ul">
        {navItems.map((item) => {
          return (
            <NavLink
              onClick={handleDrawerToggle}
              key={item}
              to={item === "home" ? "" : item}
            >
              {item}
            </NavLink>
          );
        })}
      </ul>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position={scrolled ? "fixed" : "absolute"}
        component="nav"
        className={
          scrolled ? "scroled-nav navbar white-bg py-2" : "navbar white-bg"
        }
      >
        <Toolbar className="toolbar flex justify-between flex-row-reverse tab:flex-row">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
            className="drawer-btn tab:hidden"
          >
            <MenuIcon />
          </IconButton>
          <div className="navbar-logo flex items-center">
            <div className="img-container mr-2">
              <img src="./landing-imgs/face-port-1.png" />
            </div>{" "}
            <h3>Abdalla</h3>
          </div>
          <ul className="hidden tab:flex gap-6 navbar-ul pr-2 ">
            {navItems.map((item) => {
              return (
                <NavLink key={item} to={item === "home" ? "" : item}>
                  {item}
                </NavLink>
              );
            })}
          </ul>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="block tab:hidden drawer"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
      <Toolbar className="toolbarr" />
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
