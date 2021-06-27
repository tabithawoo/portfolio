import React from "react";
import {gql, useQuery} from "@apollo/client";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

import type {Project} from '../types';
import {Header,ProjectItem} from '../components';

// Query
const GET_PROJECTS = gql`
query starredProjects { 
    viewer { 
      starredRepositories {
        edges {
          node {
            ... on Repository {
              name
              description
              pushedAt
              openGraphImageUrl
              url
              homepageUrl
              readme: object(expression: "main:README.md") {
                ... on Blob {
                    text
                }
              }
            }
          }
        }
      }
    }
  }
`
type ProjectNode = {
    node: Project;
}

const verticalOffset = 40;

const useStyles = makeStyles(({ breakpoints,spacing }: Theme) => ({
  projectsContainer: {
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
}));

export function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const classes = useStyles();

  const displayData = () => {
    if (data) {
        const projects = data.viewer.starredRepositories.edges.map((n: ProjectNode) => n.node);
        return(
            projects.map((p: Project, index: number) => {
                return(
                   <ProjectItem key={p.name} project={p} index={index}/>
                );
            })
        )
    }
    else if (loading) {
        return(
            <Typography variant="body1">Loading projects...</Typography>
        )
      }      
    else if (error) {
          return(
          <Typography variant="body1">Error: {error.message}</Typography>
      )
    }
  }
  return( 
    <>
      <Header text="Projects" variant="sticky" positionLeft={-50} positionTop={verticalOffset}/>
      <Box className={classes.projectsContainer}>
        {displayData()}
      </Box>
    </>
  );
}