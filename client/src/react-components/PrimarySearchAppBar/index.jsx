import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import StarsIcon from '@material-ui/icons/Stars';
import UpdateIcon from '@material-ui/icons/Update';
import { AccountCircle } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { TextField, ListItemIcon, Menu, MenuItem, Badge, Typography, IconButton, Toolbar, AppBar } from "@material-ui/core";
import "./styles.css";


const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.info.light, 0.35),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
    marginLeft: theme.spacing(8),
    width: '65%',
  },

  bar: {
    backgroundColor: '#757ce8'
  },

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [notif, setnotif] = React.useState(null);
  const isNotifOpen = Boolean(notif);
  const handleNotifOpen = (event) => {
    setnotif(event.currentTarget);
  };
  const handleNotifClose = () => {
    setnotif(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={notif}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isNotifOpen}
      onClose={handleNotifClose}
    >
        <MenuItem onClick={handleNotifClose}>
          <ListItemIcon>
            <UpdateIcon />
          </ListItemIcon>
          <Typography variant="inherit">New patch update</Typography>
        </MenuItem>
        <MenuItem onClick={handleNotifClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <Typography variant="inherit">John just liked your post</Typography>
        </MenuItem>
        <MenuItem onClick={handleNotifClose}>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <Typography variant="inherit">John just followed you</Typography>
        </MenuItem>
      
 </Menu>
  );


  return (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Typography className='title' variant="h4" >
            The BluBook
          </Typography>
        
          <div className={classes.search}>
            <TextField
              placeholder="Search Title…"
              className = 'inputInput'
            />
          </div>
          
          <IconButton className='searchIcon' color="inherit">
            <SearchIcon />
          </IconButton>

          <div className='notifybox'>
            <IconButton 
            onClick={handleNotifOpen}
             color="inherit">
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>

            <div className='profilebox'>
            <Link to={"/userprofile"}>
              <IconButton
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </ Link>
            </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
