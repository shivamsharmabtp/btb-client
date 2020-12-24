import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import DraftsIcon from '@material-ui/icons/Drafts';
import LiveTvIcon from '@material-ui/icons/LiveTv';

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
        <span className="ml-4 font-light text-sm ml-4">© BhaktiTube 2020</span>
      </List>
    </div>
  );
}
