import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import profilePic from './../containers/Images/userAvatar.png'
import LiveTvIcon from '@material-ui/icons/LiveTv';
import constants from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="m-4 flex">
        <img src={profilePic} className="object-fit h-10 w-10 rounded-full" alt=""/>
        <div className="flex flex-col ml-4">
          <span className="text-xs">Welcome To</span>
          <span><b><span className="text-blue-600">{constants.getTitle('camel')}</span>Tube</b></span>
        </div>

      </div>

      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <a href="/">
            <ListItemText primary="Home" className="w-48" />
          </a>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LiveTvIcon />
          </ListItemIcon>
          <a href="/channels">
            <ListItemText primary="Channels" />
          </a>
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <div className="flex flex-col">
          <div className="ml-4">
            <a href="/about" className="text-xs font-light">About</a>
          </div>
          <span className="ml-4 font-light text-sm ml-4 mt-2">© {constants.getTitle('camel')}Tube 2020</span>
        </div>
      </List>
    </div>
  );
}
