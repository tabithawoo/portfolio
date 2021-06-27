import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

type SubheaderProps = {
    text: string;
};

const useStyles = makeStyles(({breakpoints,palette,spacing}: Theme) => ({
    box: {
        margin: 'auto',
        backgroundColor: palette.primary.dark,
        marginBottom: spacing(2),
        textAlign: 'center',
        [breakpoints.down("md")]: {
            width: '80%'
        },
        [breakpoints.up("md")]: {
            width: '60%'
        }
    }
}));

export function Subheader(props:SubheaderProps) {
    const {text} = props;
    const classes = useStyles();
    return(
        <Box className={classes.box}>
            <Typography variant='h4' color='textSecondary'>{text}</Typography>
        </Box>
    );
}