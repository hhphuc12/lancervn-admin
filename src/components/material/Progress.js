import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Progress = () => (
  <MuiThemeProvider>
    <CircularProgress size={50} thickness={3} />
  </MuiThemeProvider>
);

export default Progress;
