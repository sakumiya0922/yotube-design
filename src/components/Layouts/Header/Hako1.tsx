import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuIcon: {
      height: 40,
      width: 40,
      marginRight: 16
    },
    youtubeIcon: {
      color: "red",
      height: 40,
      width: 40
    },
    youtubeFont: {
      fontWeight: 700,
      fontSize: 15,
      transform: "scale(1, 1.5)"
    }
  })
)

const Hako1: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container item direction="row" alignItems="center">
        <MenuIcon className={classes.menuIcon} />
        <YouTubeIcon className={classes.youtubeIcon} />
        <p className={classes.youtubeFont}>YouTube</p>
      </Grid>
    </div>
  )
}

export default Hako1



// const Hako1 = () => {
//     return (
//       <Hako1>”箱１”</Hako1>
//     )
// }

// const Hako2 = () => {
//   return (
//     <Hako2>”箱2”</Hako2>
//   )
// }
// const Hako3 = () => {
//   return (
//     <Hako3>”箱3”</Hako3>
//   )
// }

// export default Hako