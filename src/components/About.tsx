import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import { Header } from "./";

import Headshot from "../images/tabitha_headshot.jpg";

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  container: {
    position: "relative",
    [breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      marginTop: spacing(2),
      padding: "none",
    },
    [breakpoints.only("md")]: {
      top: "70vh",
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
    },
    [breakpoints.up("lg")]: {
      top: "70vh",
      paddingLeft: spacing(5),
      paddingRight: spacing(10),
    },
  },
  bioSection: {
    [breakpoints.down("sm")]: {
      width: "92%",
      margin: "auto",
      padding: "none",
      marginBottom: spacing(2),
    },
  },
  bio: {
    [breakpoints.up("md")]: {
      maxWidth: "50vw",
      marginLeft: spacing(4),
    },
  },
  headshot: {
    [breakpoints.only("xs")]: {
      width: "75vw",
    },
    [breakpoints.only("sm")]: {
      width: "55vw",
    },
    [breakpoints.up("md")]: {
      width: "90%",
    },
  },
  factsPaper: {
    backgroundColor: palette.primary.dark,
    paddingLeft: spacing(1),
    paddingRight: spacing(1),
    position: "relative",
    minWidth: "220px",
    [breakpoints.only("xs")]: {
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
      top: "-15rem",
      width: "70vw",
      left: "min(30vw, 100vw - 220px)",
    },
    [breakpoints.only("sm")]: {
      paddingTop: spacing(4),
      paddingBottom: spacing(4),
      top: "-30rem",
      width: "60vw",
      left: "40vw",
    },
    [breakpoints.up("md")]: {
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
      top: "-12rem",
      width: "90%",
      left: "10%",
    },
  },
  divider: {
    backgroundColor: palette.background.default,
  },
  intextLink: {
    color: palette.primary.dark,
  },
}));

export function About() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={5}>
        <img src={Headshot} className={classes.headshot} alt="" />
        <Paper className={classes.factsPaper} square elevation={0}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                color="textSecondary"
                align="center"
                gutterBottom
              >
                QUICK FACTS
              </Typography>
              <Divider className={classes.divider} variant="middle" />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1" color="textSecondary" align="right">
                <strong>Pronouns:</strong>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1" color="textSecondary">
                she/her
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1" color="textSecondary" align="right">
                <strong>Hometown:</strong>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1" color="textSecondary">
                Hobart, Tasmania (nipaluna, lutruwita)
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1" color="textSecondary" align="right">
                <strong>Pets:</strong>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1" color="textSecondary">
                1 cat named Margarita
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1" color="textSecondary" align="right">
                <strong>Party Trick:</strong>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1" color="textSecondary">
                Reciting Pi to 80 digits
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={7} className={classes.bioSection}>
        <Header text="About" variant="relative" positionLeft={-30} />
        <Box className={classes.bio}>
          <Typography variant="h6" gutterBottom>
            I'm a developer from Sydney, recently graduated with a Diploma of Software Development from TAFE.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Pivoting in the wake of COVID-19, I threw myself into coding
            every day. I love being a full-stack developer and learning new
            languages and frameworks to create dynamic, extensible projects.
          </Typography>
          <Typography variant="h6" gutterBottom>
            My background is in hospitality and the creative arts.
          </Typography>
          <Typography variant="body1" gutterBottom>
            This gives me a unique understanding of UI/UX, including hard skills
            in photo editing and copywriting. Plus, I bring excellent
            communication and collaboration skills to a team.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Browse my{" "}
            <Link
              component={RouterLink}
              to="/projects"
              className={classes.intextLink}
            >
              Projects
            </Link>{" "}
            and{" "}
            <Link
              component={RouterLink}
              to="/cv"
              className={classes.intextLink}
            >
              CV
            </Link>{" "}
            to see more, or head straight to the{" "}
            <Link
              component={RouterLink}
              to="/contact"
              className={classes.intextLink}
            >
              Contact page
            </Link>{" "}
            to get in touch.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
