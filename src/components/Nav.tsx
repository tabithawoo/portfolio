import React, { useEffect, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { makeStyles } from "@material-ui/core/styles";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { default as MenuIcon } from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';

import Grevillea from "../images/GrevilleaStock.jpeg";

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  nav: {
    [breakpoints.down("md")]: {
      position: "fixed",
      width: "100vw",
      height: spacing(6),
      top: 0,
      display: "flex",
      alignItems: "center",
      zIndex: 1200,
    },
    [breakpoints.up("md")]: {
      minHeight: "100vh",
      width: "25vw",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      zIndex: 0
    },
    backgroundColor: palette.primary.light,
    padding: spacing(3),
  },
  menuIcon: {
    color: "#060B01",
  },
  drawerBackground: {
    position: "relative",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    right: spacing(4),
    top: spacing(4),
    padding: 0
  },
  drawerContents: {
    position: "absolute",
    background:
      "linear-gradient(to bottom right, #ddbf61 0%, #ddbf61 10%, rgba(255,255,255,0) 100%)",
    paddingTop: spacing(8),
    paddingLeft: spacing(6),
    width: "100%",
    maxWidth: "100vw",
    height: "100%",
  },
  navIcon: {
    color: "#060B01",
    paddingTop: spacing(0),
    paddingLeft: spacing(0),
    marginRight: spacing(1),
    paddingBottom: spacing(1)
  },
  navLink: {
    color: "#060B01",
    display: "block",
  },
}));

export function Nav() {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { drawerOpen, mobileView } = state;
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayLinks = () => {
    return (
      <>
        {routerLinks.map((link) => {
          return (
            <Link
              key={link.label}
              component={RouterLink}
              to={link.href}
              onClick={handleDrawerClose}
              className={classes.navLink}
              variant="h5"
            >
              {link.label}
            </Link>
          );
        })}
        {externalLinks.map((link) => {
          let LinkIcon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={classes.navLink}
              variant="h5"
            >
              <IconButton
                className={classes.navIcon}
                edge="end"
                disableFocusRipple
              >
                <LinkIcon fontSize="small" />
              </IconButton>
              {link.label}
            </Link>
          );
        })}
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    return (
      <>
        <IconButton
          className={classes.menuIcon}
          edge="start"
          onClick={handleDrawerOpen}
          aria-controls="navigation-menu"
          aria-label="menu"
          aria-haspopup="true"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <img src={Grevillea} className={classes.drawerBackground} alt="" />
          <Box className={classes.drawerContents}>
            <IconButton
              className={classes.closeIcon}
              onClick={handleDrawerClose}
              aria-controls="close-navigation"
              aria-label="close-menu"
            >
              <CloseIcon/>
            </IconButton>
            {displayLinks()}            
          </Box>
        </Drawer>
      </>
    );
  };

  return (
    <Box className={classes.nav}>
      {mobileView ? displayMobile() : displayLinks()}
    </Box>
  );
}

const routerLinks: { label: string; href: string }[] = [
  {
    label: "Tabitha Woo",
    href: "/",
  },
  {
    label: "CV",
    href: "/cv",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const externalLinks: { icon: any; label: string; href: string }[] = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tabitha-woo/",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: "https://github.com/tabithawoo",
  },
];
