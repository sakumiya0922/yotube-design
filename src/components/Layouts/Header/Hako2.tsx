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
import MicIcon from '@material-ui/icons/Mic';

interface Hako2Props {
  message: string,
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      borderColor: "rgb(204, 204, 204)",
      width: "Auto",
    },
    input: {
      marginLeft: theme.spacing(1),
      marginRight: "16",
      flex: 1,
      border: "solid 1px",
      width: "100%",
      height: "40",
      boxShadow: "rgb(238, 238, 238) 0px 1px 2px 0px inset",
      placeholder:"検索",
      inputProps:{ 'aria-label': '検索' },
      padding: '2px 6px',
      borderColor:"rgb(204, 204, 204)",

    },
    searchIcon: {
      height: 36,
      marginRight: "Auto",
      backgroundColor: "rgb(248, 248, 248)",
      borderColor:"rgb(204, 204, 204)",
      justify:"flex-end",
      border: "solid 1px",
      width: 50,
    },
    micIcon: {
      height: 40,
      width: 40,
      marginRight: "Auto",
      justify:"flex-end"
    },
  }),
);

export default function Hako2() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
        <InputBase className={classes.input} placeholder={"検索"} inputProps={{ 'aria-label': '検索' }}/>
        <SearchIcon  type="submit" className={classes.searchIcon} aria-label="search"/>  
        <MicIcon className={classes.micIcon}/>
    </Grid>

 )
}


// interface Hako2Props {
//   message: string,
// }
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       padding: '2px 6px 6px 2px',
//       display: 'flex',
//       alignItems: 'center',
//       border: "solid 2px",
//       borderColor: "rgb(204, 204, 204)",
//       boxShadow: "rgb(238, 238, 238) 0px 1px 2px 0px inset"
//     },
//     input: {
//       marginLeft: theme.spacing(1),
//       flex: 1,
//       width: "100%"
//     },
//     iconButton: {
//       padding: 10,
//       marginRight: "auto",
//       backgroundColor: "rgb(211, 211, 211)"
//     },
//     MicIcon: {
//       height: 40,
//       width: 40,
//       marginRight: 16,
//     },
//   }),
// );

    // <Grid container className={classes.root}>
    //   <Grid item xs={10} sm={10}>
    //     <InputBase
    //       className={classes.input}
    //       placeholder="検索"
    //       inputProps={{ 'aria-label': '検索' }}
    //     />
    //   </Grid>

    //   <Grid item xs={1} sm={1}>
    //     <IconButton type="submit" className={classes.iconButton} aria-label="search">  
    //       <SearchIcon />
    //     </IconButton>
    //   </Grid>

    //   <Grid>
    //     <MicIcon />
    //   </Grid>

    // </Grid>
//   )
// }
