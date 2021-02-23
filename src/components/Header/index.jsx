import { IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import MoodIcon from '@material-ui/icons/Mood';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';
   
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
  link: {
      color: 'white',
      textDecoration: 'none'
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 2,
  },
}));

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <MoodIcon className={classes.menuButton} />
         
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to='/'>Gia Bao</Link> 
          </Typography>

           <NavLink className={classes.link} to='/todos'>
            <Button color="inherit">Todos</Button>
           </NavLink>

           <NavLink className={classes.link} to='/albums'>
           <Button color="inherit">Albums</Button>
           </NavLink>
    
            <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>

      <Dialog disableBackdropClick disableEscapeKeyDown
       open={open} onClose={handleClose} 
       aria-labelledby="form-dialog-title">
         <IconButton className={classes.closeButton} onClick={handleClose}>
           <Close />
         </IconButton>
        <DialogContent>
          <DialogContentText>
            <Register closeDialog={handleClose} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}