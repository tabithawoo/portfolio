import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

type HeaderProps = {
    text: string;
    variant?: 'sticky' | 'relative';
    positionLeft?: number;
    positionTop?: number;
};

const useStyles = makeStyles<Theme,HeaderProps>(({breakpoints,palette,spacing}: Theme) => ({
    box: {
        backgroundColor: palette.primary.main,
        verticalAlign: 'middle',
        zIndex: 10,
        [breakpoints.down("sm")]: {
            paddingLeft: spacing(1),
            width: "100%",
            minHeight: '10vh',
            display: 'flex',
            alignItems: 'center',
        },
        [breakpoints.up("md")]: {
            paddingLeft: spacing(4),
            paddingTop: spacing(1),
            paddingBottom: spacing(1),
        }
    },
    positionSticky: {
        position: 'sticky',
        [breakpoints.up("md")]: {
            top: ({positionTop}) => positionTop,
            marginLeft: ({positionLeft}) => positionLeft
        }
    },
    positionRelative: {
        position: 'relative',
        [breakpoints.up("md")]:{
            top: ({positionTop}) => positionTop,
            left: ({positionLeft}) => positionLeft
        }       
    }
}));

export function Header(props:HeaderProps) {
    const {text, variant} = props;
    const classes = useStyles(props);

    let variantStyle;
    switch(variant)
    {
        case 'sticky':
            variantStyle = classes.positionSticky;
            break;
        case 'relative':
            variantStyle = classes.positionRelative;
            break;
        default:
            break;
    }
    return(
        <Box className={`${classes.box} ${variantStyle}`} mb={3} borderBottom={4} borderColor='text.primary'>
            <Typography variant='h2'>{text}</Typography>
        </Box>
    );
}