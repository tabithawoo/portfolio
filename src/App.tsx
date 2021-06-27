import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Contact,CV,Home,Projects} from './pages';
import {Nav} from './components';

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(({breakpoints, spacing}: Theme) => ({
  page: {
    [breakpoints.down("sm")]: {
      marginTop: spacing(6)
    },
    [breakpoints.up("md")]: {
      marginTop: 0
    }
  }
}))

const App = () => {
  const classes = useStyles();
  return( 
    <Router>
    <Grid container>
      <Grid item xs={12} md={3}>
      <Nav/>
      </Grid>
      <Grid item xs={12} md={9} className={classes.page}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cv" component={CV}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Grid>
    </Grid>
    </Router>
  );
}

export default App;
