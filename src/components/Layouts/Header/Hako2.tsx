import React, { Component } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import AppleIcon from '@material-ui/icons/Apple';

interface Hako2Props {
  message: string,
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 6px 6px 2px',
      display: 'flex',
      alignItems: 'center',
      border: "solid 2px",
      borderColor: "rgb(204, 204, 204)",
      boxShadow: "rgb(238, 238, 238) 0px 1px 2px 0px inset"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      width: "100%"
    },
    iconButton: {
      padding: 10,
      marginRight: "auto",
      backgroundColor: "rgb(211, 211, 211)"
    },
  }),
);

export default function Hako2() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={9} sm={9}>
        <InputBase
          className={classes.input}
          placeholder="検索"
          inputProps={{ 'aria-label': '検索' }}
        />
      </Grid>
      <Grid item xs={1} sm={1}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid>
        <AppleIcon />
      </Grid>
    </Grid>
  );
}
