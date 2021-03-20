import { Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { Menu } from '@material-ui/icons'
import Hako1 from './Hako1'
import Hako2 from './Hako2'
import Hako3 from './Hako3'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      paddingRight: 16,
      paddingLeft:16
    },
  })
)
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.content}>
        <Hako1 message="箱1"/>
        <Hako2 message="箱２"/>
        <Hako3 message="箱３"/>
      </Toolbar>
    </AppBar>
  )
}

export default Header