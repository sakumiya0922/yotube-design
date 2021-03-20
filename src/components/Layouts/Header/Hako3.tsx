import React, { Component } from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    videocallIcon: {
      height: 40,
      width: 40,
      marginLeft: 20,
    },
    viewmoduleIcon: {
      height: 40,
      width: 40,
      marginLeft: 20
    },
    notificationsIcon: {
      height: 40,
      width: 40,
      marginLeft: 20
    },
    accountboxIcon: {
      height: 40,
      width: 40,
      marginLeft: 20
    },
  })
)

const Hako3: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container item direction="row" alignItems="center"　justify="flex-end">
        <VideoCallIcon className={classes.videocallIcon }/>
        <ViewModuleIcon className={classes.viewmoduleIcon}/>
        <NotificationsIcon className={classes.notificationsIcon}/>
        <AccountBoxIcon className={classes.accountboxIcon}/>
      </Grid>
    </div>
  )
}
export default Hako3