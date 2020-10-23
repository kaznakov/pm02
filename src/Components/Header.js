import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
/**
 * Верхний тулбар, хедер
 * @param {*} param0 
 */
export default function ButtonAppBar({ accessLevel, setAccessLevel}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
          </IconButton>
          <Typography variant="h6" className={classes.title} href="/">KINOBAR</Typography>
          {!accessLevel ?
            <Button color="inherit" href="/SignIn">Войти</Button>
            : <Button color="inherit" href="/SignIn" onClick = {()=> setAccessLevel(0)}>Выйти</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}