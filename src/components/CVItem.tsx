import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

type CVItemProps = {
    subtitle: string;
    title: string;
    dates?: string;
    children?: any;
}

const useStyles = makeStyles(({palette,spacing}:Theme) => ({
    container: {
        width: '100%',
        marginBottom: spacing(3),
    }
}))

export function CVItem(props: CVItemProps) {
    const {subtitle, title, dates, children} = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.container} justify='space-around'>
            <Grid item xs={12} md={4}>
                <Typography variant='h5'>{subtitle}</Typography>
                <Typography variant='body1'>{dates}</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant='h6'>{title}</Typography>
                <Typography variant='body1'>{children}</Typography>
            </Grid>
        </Grid>
    );
}