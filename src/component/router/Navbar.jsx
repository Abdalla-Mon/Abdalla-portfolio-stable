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

import { useNavigate } from "react-router-dom";
import { RouteProvider } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const drawerWidth = 240;
const navItems = ["home", "portfolio", "about", "contact"];
let w = window;
export default function Navbar() {
  return <DrawerAppBar />;
}
function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className="drawer-handle" sx={{ textAlign: "center" }}>
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
        {navItems.map((item, ind) => {
          return (
            <a
              id={item + "mob"}
              className={item === "home" ? "active mob-links" : "mob-links"}
              onClick={() => {
                handleDrawerToggle();

                navig(
                  item === "home" ? "" : item,
                  item + "mob",
                  "mob-links",
                  ind
                );
              }}
              key={item}
              to={item === "home" ? "" : item}
            >
              {item}
            </a>
          );
        })}
      </ul>
    </Box>
  );
  function navig(e, id, className, i) {
    if (i > index) {
      setState("left");
    } else {
      setState("right");
    }
    setIndex(i);
    setAnimation(true);
    w.setTimeout(() => {
      navigate(e);
      setAnimation(false);
    }, 800);
    document.querySelectorAll("." + className).forEach((el) => {
      el.classList.remove("active");
    });
    document.querySelector("#" + id).classList.add("active");
  }
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { setAnimation, index, setIndex, setState } =
    React.useContext(RouteProvider);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position={"absolute"}
        component="nav"
        className={"navbar white-bg"}
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
          <div
            className="navbar-logo flex items-center"
            onClick={() => {
              navig("");
            }}
          >
            <div className="img-container mr-2">
              <img src="./landing-imgs/face-port-1.png" />
            </div>{" "}
            <h3>Abdalla</h3>
          </div>
          <ul className="hidden tab:flex gap-6 navbar-ul pr-2 ">
            {navItems.map((item, ind) => {
              return (
                <a
                  key={item}
                  id={item + "pc"}
                  className={item === "home" ? "active pc-links" : "pc-links"}
                  onClick={() => {
                    navig(
                      item === "home" ? "" : item,
                      item + "pc",
                      "pc-links",
                      ind
                    );
                  }}
                >
                  {item}
                </a>
              );
            })}
          </ul>
          <ToggleMode />
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
function rootColors(toggle) {
  let theme = [
    { var: "--primary-color", lightColor: "#ff014f", darkColor: "#ff014f" },
    { var: "--secondary-color", lightColor: "#f4f5f6", darkColor: "#f4f5f6" },
    { var: "--tertiary-color", lightColor: "#0d1013", darkColor: "#0d1013" },
    { var: "--gray-color", lightColor: "#f6f6f6", darkColor: "#f6f6f6" },
    { var: "--body-color", lightColor: "#3c3e41", darkColor: "#c4cfde" },
    { var: "--heading-color", lightColor: "#1e2125", darkColor: "#ffffff" },
    { var: "--subtitle-color", lightColor: "#f9004d", darkColor: "#f9004d" },
    { var: "--background-color", lightColor: "#ecf0f3", darkColor: "#212428" },
    {
      var: "--box-shadow",
      lightColor: "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff",
      darkColor: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
    },
    {
      var: "--gradiant-color",
      lightColor: "linear-gradient(145deg, #e2e8ec, #ffffff)",
      darkColor: "linear-gradient(145deg, #1e2024, #23272b)",
    },
    {
      var: "--hover-gradiant-color",
      lightColor: "linear-gradient(145deg, #ff014f, #d11414)",
      darkColor: "linear-gradient(to right bottom, #212428, #16181c)",
    },
  ];
  if (toggle) {
    theme.forEach((e) => {
      document.documentElement.style.setProperty(e.var, e.darkColor);
    });
  } else {
    theme.forEach((e) => {
      document.documentElement.style.setProperty(e.var, e.lightColor);
    });
  }
}
function ToggleMode() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <motion.div
      className="toggle-mode relative"
      animate={
        toggle
          ? { backgroundColor: "#f4f5f6", color: "#1e2125" }
          : { backgroundColor: "#1e2125", color: "#f4f5f6" }
      }
      onClick={() => {
        setToggle(!toggle);
        rootColors(!toggle);
      }}
    >
      <FontAwesomeIcon icon="fa-solid fa-moon" />{" "}
      <FontAwesomeIcon icon="fa-solid fa-sun" />
      <motion.span
        className="ball"
        initial={
          toggle
            ? { left: 33, backgroundColor: "#1e2125" }
            : { left: 4, backgroundColor: "#f4f5f6" }
        }
        animate={
          toggle
            ? { left: 33, backgroundColor: "#1e2125" }
            : { left: 4, backgroundColor: "#f4f5f6" }
        }
      ></motion.span>
    </motion.div>
  );
}
DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
