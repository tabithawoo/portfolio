import React from "react";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

import {Header,Subheader} from '../components';

const verticalOffset = 40;

const useStyles = makeStyles(({ breakpoints,palette,spacing }: Theme) => ({
    contactsContainer: {
      margin: "auto",
      paddingBottom: verticalOffset,
      [breakpoints.down("md")] : {
        width: "95%"
      },
      [breakpoints.up("md")] : {
        width: "90%",
        paddingTop: `${verticalOffset + spacing(2)}px`,
      }
    },
    socialLink: {
        display: 'block',
        textAlign: 'center',
        color: palette.primary.dark
    }
  }));

export function Contact() {
    const classes = useStyles();
    return(
        <>
        <Header text="Contact" variant="sticky" positionLeft={-50} positionTop={verticalOffset}/>
        <Grid container spacing={4} className={classes.contactsContainer}>
            <Grid item xs={12} md={6}>
                <Subheader text="Get In Touch"/>
                <Typography variant="body1" align="center">tabitha.woo@gmail.com</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
            <Subheader text="Follow"/>
                <Link href="https://www.linkedin.com/in/tabitha-woo/" variant="body1" className={classes.socialLink} target="_blank" rel="noopener">LinkedIn</Link>
                <Link href="https://github.com/tabithawoo" variant="body1" className={classes.socialLink} target="_blank" rel="noopener">GitHub</Link>
                <Link href="https://twitter.com/tabitha135" variant="body1" className={classes.socialLink} target="_blank" rel="noopener">Twitter</Link>
            </Grid>
        </Grid>
        </>
        );
}