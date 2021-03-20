import { Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography, Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { Menu } from '@material-ui/icons'
import Hako1 from './Hako1'
import Hako2 from './Hako2'
import Hako3 from './Hako3'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      paddingRight: 16,
      paddingLeft: 16,
      height: 56,

    },
    content: {
      height: 40
    }
  })
)
const Header = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Grid container spacing={0} className={classes.content}>
        <Grid item xs={3} sm={3}>
          <Hako1 />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Hako2 />
        </Grid>
        <Grid item xs={3} sm={3}>
          <Hako3 />
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default Header