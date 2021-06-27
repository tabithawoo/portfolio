import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

import type {Project} from '../types';

type ProjectItemProps = {
    project: Project;
    index: number;
}

const useStyles = makeStyles(({breakpoints,palette,spacing}:Theme) => ({
    container: {
        marginBottom: spacing(4),
        justifyContent: "space-around",
    },
    imageItem: {
        [breakpoints.down('md')]: {
            order: '1'
        }
    },
    infoItem: {
        [breakpoints.down('md')]: {
            order: '2'
        }
    },
    previewImage: {
        maxWidth: '100%'
    },
    button: {
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
        marginRight: spacing(1),
        zIndex: 0
    },
    ghButton: {
        backgroundColor: palette.primary.dark,
        color: palette.background.default
    },
    deployedButton: {
        backgroundColor: palette.primary.main,
    }
}))

const DisplayProjectInfo = (props: {project: Project}) => {
    const {project} = props;
    const classes = useStyles();

    const pushedAt = new Date(project.pushedAt);
    const datePushedAt = pushedAt.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});

    return(
        <>
        <Typography variant="h3">{project.name}</Typography>
        <Typography variant="h6">Last updated: {datePushedAt}</Typography>
        <Typography variant="body1" gutterBottom>{project.description}</Typography>
        <Button className={`${classes.button} ${classes.ghButton}`} href={project.url} target="_blank" rel="noopener"><Typography variant="h5">GitHub</Typography></Button>    
        {project.homepageUrl && 
                <Button className={`${classes.button} ${classes.deployedButton}`} href={project.homepageUrl} target="_blank" rel="noopener"><Typography variant="h5">Deployed Site</Typography></Button>              
        }        
        </>
    );  
}

export function ProjectItem(props: ProjectItemProps) {
    const {project, index} = props;
    const classes = useStyles();

   
    if(index % 2 === 0) {
        return (
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} md={7} className={classes.imageItem}>
                    <img src={project.openGraphImageUrl} className={classes.previewImage} alt={project.description}/>
                </Grid>
                <Grid item xs={12} md={5} className={classes.infoItem}>
                    <DisplayProjectInfo project={project}/>
                </Grid>
            </Grid>
        );
    }
    return (
        <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} md={5} className={classes.infoItem}>
            <DisplayProjectInfo project={project}/>
        </Grid>
        <Grid item xs={12} md={7} className={classes.imageItem}>
            <img src={project.openGraphImageUrl} className={classes.previewImage} alt={project.description}/>
        </Grid>
    </Grid>
    );
}