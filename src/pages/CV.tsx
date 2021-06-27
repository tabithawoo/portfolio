import React from "react";
import Grid from "@material-ui/core/Grid";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { makeStyles } from "@material-ui/core/styles";

import { CVItem, Header, Subheader } from "../components";

const verticalOffset = 40;

const useStyles = makeStyles(({ breakpoints,spacing }: Theme) => ({
  cvContainer: {
    margin: "auto",
    paddingBottom: verticalOffset,
    [breakpoints.down("md")] : {
      width: "90%"
    },
    [breakpoints.up("md")] : {
      width: "75%",
      paddingTop: `${verticalOffset + spacing(2)}px`,
    }
  },
}));

export function CV() {
  const classes = useStyles();
  return (
    <>
      <Header text="CV" variant="sticky" positionLeft={-50} positionTop={verticalOffset}/>
      <Grid container className={classes.cvContainer}>
      <Grid item xs={12}>
          <Subheader text="Key Technical Skills" />
        </Grid>
        <Grid item xs={12}>
          <CVItem 
            subtitle="Languages"
            title="JavaScript, C#, HTML/CSS, TypeScript"
          />
          <CVItem 
            subtitle="Libraries / Frameworks"
            title="React.js, jQuery, Bootstrap 4/5, Material-UI, Gatsby, React Native"
          />
          <CVItem 
            subtitle="Tools / Technical"
            title="ASP.NET, REST APIs, Strapi headless CMS"
          />
          <CVItem 
            subtitle="Data"
            title="Entity Framework Core, SQL, GraphQL"
          />
        </Grid>
        <Grid item xs={12}>
          <Subheader text="Education" />
        </Grid>
        <Grid item xs={12}>
          <CVItem
            subtitle="TAFE NSW"
            title="Diploma of Software Development"
            dates="Jan - Jun 2021"
          >
            Major Project: Complete restaurant reservation system in C#, including APIs and connection to a database using EF Core. Developed in a small team with Azure DevOps source control.
          </CVItem>
          <CVItem
            subtitle="TAFE NSW"
            title="Certificate IV in Programming"
            dates="Jul - Dec 2020"
          >
            Major Project: Inventory and ordering system, developed in WPF with connection to a SQL Server database.
          </CVItem>
          <CVItem
            subtitle="University of Sydney"
            title="Bachelor of Arts"
            dates="2015 - 2016"
          >
            Majors: Performance Studies and Ancient History
            <br/>Treasurer, Sydney University Dramatic Society
          </CVItem>
          <CVItem
            subtitle="Australian Institute of Music"
            title="Bachelor of Performance (Dramatic Arts)"
            dates="2013 - 2014"
          />
        </Grid>
        <Grid item xs={12}>
          <Subheader text="Work History" />
        </Grid>
        <Grid item xs={12}>
          <CVItem
            subtitle="Ovolo Hotels"
            title="Guest Services Agent / Restaurant Server"
            dates="Mar 2016 - June 2021"
          />
          <CVItem
            subtitle="Freelance"
            title="Independent Theatre Artist"
            dates="Jul 2015 - Present"
          />
        </Grid>
      </Grid>
    </>
  );
}
