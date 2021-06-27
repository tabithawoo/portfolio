import * as React from "react";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";
import CoverPhoto from "../images/leaf-bg.jpg";

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column"
    }
  },
  headerImage: {
    [breakpoints.down("sm")]: {
      width: "100vw",
      height: "13vh",
      order: '1'
    },
    [breakpoints.up("md")]: {
      position: "absolute",
      width: "72%",
      height: "35%",
      left: "23%",
      top: "7%",
    },
  },
  heading: {
    color: '#000000',
    whiteSpace: 'nowrap',
    verticalAlign: 'bottom',
    [breakpoints.only("md")]: {
      padding: '10px 45px',
      border: '6px solid #000000',
    },
    [breakpoints.up("lg")]: {
      padding: '10px 90px',
      border: '6px solid #000000',
    },
  },
  headingPaper: {
    backgroundColor: palette.primary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      position: 'relative',
      order: '2',
      width: "100%",
      minHeight: "7rem",
      borderTop: "4px solid #000000",
      borderBottom: "4px solid #000000"
    },
    [breakpoints.up("md")]: {
      position: "absolute",
      width: "63%",
      height: "30%",
      left: "12%",
      top: "20%",
      borderTop: "none",
      borderBottom: "none"
    },
  },
  subheading: {
    [breakpoints.down("sm")]:{
      display:'none'
    }
  },
  subheadingPaper: {
    backgroundColor: palette.primary.dark,
    color: palette.background.default,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      order: '3',
      width: "100%",
      height: "7vh",
      borderTop: "2px solid #ddbf61"
    },
    [breakpoints.up("md")]: {
      position: "absolute",
      opacity: 0.75,
      padding: spacing(0),
      width: "65%",
      height: "25%",
      left: "19%",
      top: "35%",
      justifyContent: "flex-end",
      borderTop: "none"
    },
  },
}));

export function Banner() {
  const classes = useStyles();

  return (
      <Box className={classes.root}>
        <CardMedia image={CoverPhoto} className={classes.headerImage} />
        <Paper className={classes.subheadingPaper} square elevation={0}>
          <Box pb={2} position="relative">
            <Typography className={classes.subheading} variant="h4">WEB DEVELOPER</Typography>
          </Box>
        </Paper>
        <Paper className={classes.headingPaper} square elevation={0}>
          <Typography variant="h1" className={classes.heading}>
            Tabitha Woo
          </Typography>
        </Paper>
      </Box>
  );
}
