
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { ListItemIcon, Menu, MenuItem, Typography, IconButton, Toolbar, AppBar, TextField } from "@material-ui/core";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link } from "react-router-dom";
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

export default function AdminBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {/* <Link to={"/admin"}>
          <MenuItem >
            <ListItemIcon>
              <KeyboardReturnIcon />
            </ListItemIcon>
            <Typography variant="inherit">Dashboard</Typography>
          </MenuItem>
        </Link> */}

        <Link to={"/admin"}>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Typography variant="inherit">Posts</Typography>
          </MenuItem>
        </Link>   
        <Link to={"/adminuser"}>
          <MenuItem>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <Typography variant="inherit">Users</Typography>
          </MenuItem> 
        </Link>
                 
    </Menu>
    );
  return (
    <div>
      <AppBar position="fixed" className={classes.bar} >
        <Toolbar>
            <div className='menu'>
                <IconButton
                    color="inherit"
                    onClick={handleMenuOpen}
                >
                    <MenuIcon />
                </IconButton>
            </div>
    
            <Typography className='title' variant="h6" >
            BluBook Admin
          </Typography>

            <div className={classes.search}>
            <TextField
              placeholder="Search Title…"
              className = 'inputInput'
            />
          </div>

            {/* <div className='accountbox'>
              <IconButton
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div> */}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
